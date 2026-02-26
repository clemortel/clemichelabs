import 'package:clemichelabs/application/contact/contact_provider.dart';
import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:clemichelabs/core/utils/responsive.dart';
import 'package:clemichelabs/presentation/shared/widgets/neon_button.dart';
import 'package:clemichelabs/presentation/shared/widgets/section_wrapper.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ContactSection extends ConsumerStatefulWidget {
  final GlobalKey sectionKey;

  const ContactSection({required this.sectionKey, super.key});

  @override
  ConsumerState<ContactSection> createState() => _ContactSectionState();
}

class _ContactSectionState extends ConsumerState<ContactSection> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _messageController.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;

    await ref.read(contactFormProvider.notifier).submit(
          name: _nameController.text.trim(),
          email: _emailController.text.trim(),
          message: _messageController.text.trim(),
        );

    if (mounted) {
      final ContactFormState state = ref.read(contactFormProvider);
      if (state.status == ContactFormStatus.sent) {
        _nameController.clear();
        _emailController.clear();
        _messageController.clear();
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;
    final ContactFormState formState = ref.watch(contactFormProvider);
    final bool isMobile = Responsive.isMobile(context);

    return SectionWrapper(
      sectionKey: widget.sectionKey,
      title: AppContent.contactHeadline,
      subtitle: AppContent.contactSub,
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: isMobile ? 500 : 600),
        child: formState.status == ContactFormStatus.sent
            ? _buildSuccessMessage(theme, isDark)
            : _buildForm(theme, isDark, formState),
      ).animate().fadeIn(duration: 500.ms),
    );
  }

  Widget _buildSuccessMessage(ThemeData theme, bool isDark) {
    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingXl),
      decoration: BoxDecoration(
        color: AppTheme.success.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(AppTheme.radiusMd),
        border: Border.all(
          color: AppTheme.success.withValues(alpha: 0.3),
        ),
      ),
      child: Column(
        children: [
          const Icon(Icons.check_circle, color: AppTheme.success, size: 48),
          const SizedBox(height: AppTheme.spacingMd),
          Text(
            'Message sent!',
            style: theme.textTheme.headlineSmall,
          ),
          const SizedBox(height: AppTheme.spacingSm),
          Text(
            'Thanks for reaching out. I\'ll get back to you within 24h.',
            style: theme.textTheme.bodyMedium?.copyWith(
              color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: AppTheme.spacingLg),
          NeonButton(
            label: 'Send another',
            onPressed: () => ref.read(contactFormProvider.notifier).reset(),
            outlined: true,
          ),
        ],
      ),
    );
  }

  Widget _buildForm(
    ThemeData theme,
    bool isDark,
    ContactFormState formState,
  ) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          TextFormField(
            controller: _nameController,
            decoration: const InputDecoration(
              hintText: 'Your name',
            ),
            validator: (String? value) =>
                (value == null || value.trim().isEmpty)
                    ? 'Name is required'
                    : null,
          ),
          const SizedBox(height: AppTheme.spacingMd),
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(
              hintText: 'Your email',
            ),
            keyboardType: TextInputType.emailAddress,
            validator: (String? value) {
              if (value == null || value.trim().isEmpty) {
                return 'Email is required';
              }
              if (!value.contains('@') || !value.contains('.')) {
                return 'Enter a valid email';
              }
              return null;
            },
          ),
          const SizedBox(height: AppTheme.spacingMd),
          TextFormField(
            controller: _messageController,
            decoration: const InputDecoration(
              hintText: 'Tell me about your project...',
            ),
            maxLines: 5,
            validator: (String? value) =>
                (value == null || value.trim().isEmpty)
                    ? 'Message is required'
                    : null,
          ),
          const SizedBox(height: AppTheme.spacingLg),
          if (formState.status == ContactFormStatus.error)
            Padding(
              padding: const EdgeInsets.only(bottom: AppTheme.spacingMd),
              child: Text(
                'Something went wrong. Please try again.',
                style: theme.textTheme.bodySmall?.copyWith(
                  color: AppTheme.error,
                ),
                textAlign: TextAlign.center,
              ),
            ),
          Center(
            child: NeonButton(
              label: formState.status == ContactFormStatus.sending
                  ? 'Sending...'
                  : 'Send Message',
              onPressed: formState.status == ContactFormStatus.sending
                  ? () {}
                  : _submit,
              icon: Icons.send,
            ),
          ),
          const SizedBox(height: AppTheme.spacingMd),
          Text(
            'Or email directly: ${AppContent.email}',
            style: theme.textTheme.bodySmall?.copyWith(
              color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
