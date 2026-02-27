import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:clemichelabs/core/utils/responsive.dart';
import 'package:clemichelabs/presentation/shared/widgets/section_wrapper.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class AboutSection extends StatelessWidget {
  final GlobalKey sectionKey;

  const AboutSection({required this.sectionKey, super.key});

  @override
  Widget build(BuildContext context) {
    final bool isMobile = Responsive.isMobile(context);

    return SectionWrapper(
      sectionKey: sectionKey,
      title: 'About',
      subtitle: 'The human behind the code.',
      child: isMobile ? _buildMobile(context) : _buildDesktop(context),
    );
  }

  Widget _buildDesktop(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          flex: 2,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(AppTheme.radiusMd),
            child: Image.asset(
              'assets/images/photo_portrait.jpg',
              height: 400,
              fit: BoxFit.cover,
              alignment: Alignment.topCenter,
            ),
          ).animate().fadeIn(duration: 500.ms).slideX(begin: -0.1, end: 0),
        ),
        const SizedBox(width: AppTheme.spacingXl),
        // Bio
        Expanded(flex: 3, child: _buildBioContent(context)),
      ],
    );
  }

  Widget _buildMobile(BuildContext context) {
    return Column(
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(AppTheme.radiusMd),
          child: Image.asset(
            'assets/images/photo_portrait.jpg',
            height: 200,
            width: double.infinity,
            fit: BoxFit.cover,
            alignment: Alignment.topCenter,
          ),
        ),
        const SizedBox(height: AppTheme.spacingLg),
        _buildBioContent(context),
      ],
    );
  }

  Widget _buildBioContent(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(AppContent.founderName, style: theme.textTheme.headlineMedium),
        const SizedBox(height: 4),
        Text(
          AppContent.founderTitle,
          style: theme.textTheme.bodyLarge?.copyWith(color: AppTheme.primary),
        ),
        const SizedBox(height: AppTheme.spacingMd),
        Text(
          AppContent.founderBio,
          style: theme.textTheme.bodyMedium?.copyWith(
            color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
            height: 1.7,
          ),
        ),
        const SizedBox(height: AppTheme.spacingLg),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: AppContent.founderSkills.map((String skill) {
            return Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(
                color: AppTheme.primary.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(AppTheme.radiusFull),
                border: Border.all(
                  color: AppTheme.primary.withValues(alpha: 0.2),
                ),
              ),
              child: Text(
                skill,
                style: theme.textTheme.labelMedium?.copyWith(
                  color: AppTheme.primary,
                ),
              ),
            );
          }).toList(),
        ),
      ],
    ).animate().fadeIn(duration: 500.ms, delay: 200.ms);
  }
}
