import 'package:clemichelabs/application/scroll/scroll_provider.dart';
import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:clemichelabs/core/utils/responsive.dart';
import 'package:clemichelabs/presentation/shared/widgets/neon_button.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HeroSection extends ConsumerWidget {
  final GlobalKey sectionKey;

  const HeroSection({required this.sectionKey, super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;
    final bool isMobile = Responsive.isMobile(context);
    final double hPadding = Responsive.horizontalPadding(context);

    return Container(
      key: sectionKey,
      width: double.infinity,
      constraints: const BoxConstraints(minHeight: 600),
      padding: EdgeInsets.symmetric(
        horizontal: hPadding,
        vertical: AppTheme.spacing3xl,
      ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(height: AppTheme.spacing2xl),
              // Badge
              Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 16,
                  vertical: 8,
                ),
                decoration: BoxDecoration(
                  color: AppTheme.primary.withValues(alpha: 0.1),
                  borderRadius: BorderRadius.circular(AppTheme.radiusFull),
                  border: Border.all(
                    color: AppTheme.primary.withValues(alpha: 0.2),
                  ),
                ),
                child: Text(
                  'Paris-based, shipping globally',
                  style: theme.textTheme.labelMedium?.copyWith(
                    color: AppTheme.primary,
                  ),
                ),
              )
                  .animate()
                  .fadeIn(duration: 600.ms)
                  .slideY(begin: -0.3, end: 0),

              const SizedBox(height: AppTheme.spacingXl),

              // Headline
              Text(
                AppContent.tagline,
                style: isMobile
                    ? theme.textTheme.displaySmall
                    : theme.textTheme.displayLarge,
                textAlign: TextAlign.center,
              )
                  .animate()
                  .fadeIn(duration: 600.ms, delay: 200.ms)
                  .slideY(begin: 0.2, end: 0),

              const SizedBox(height: AppTheme.spacingMd),

              // Subtitle
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 600),
                child: Text(
                  AppContent.taglineSub,
                  style: theme.textTheme.bodyLarge?.copyWith(
                    color: isDark
                        ? AppTheme.textMuted
                        : AppTheme.textMutedLight,
                  ),
                  textAlign: TextAlign.center,
                ),
              )
                  .animate()
                  .fadeIn(duration: 600.ms, delay: 400.ms),

              const SizedBox(height: AppTheme.spacingXl),

              // CTAs
              Wrap(
                spacing: 16,
                runSpacing: 12,
                alignment: WrapAlignment.center,
                children: [
                  NeonButton(
                    label: 'Get in Touch',
                    onPressed: () => ref
                        .read(activeSectionProvider.notifier)
                        .scrollTo(Section.contact),
                    icon: Icons.arrow_forward,
                  ),
                  NeonButton(
                    label: 'View Work',
                    onPressed: () => ref
                        .read(activeSectionProvider.notifier)
                        .scrollTo(Section.portfolio),
                    outlined: true,
                  ),
                ],
              )
                  .animate()
                  .fadeIn(duration: 600.ms, delay: 600.ms),

              const SizedBox(height: AppTheme.spacing3xl),

              // Stats bar
              Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: AppTheme.spacingLg,
                  vertical: AppTheme.spacingMd,
                ),
                decoration: BoxDecoration(
                  color: isDark
                      ? AppTheme.cardDark
                      : Colors.black.withValues(alpha: 0.03),
                  borderRadius: BorderRadius.circular(AppTheme.radiusMd),
                  border: Border.all(
                    color: isDark
                        ? Colors.white.withValues(alpha: 0.05)
                        : Colors.black.withValues(alpha: 0.05),
                  ),
                ),
                child: Wrap(
                  spacing: isMobile ? 24 : 48,
                  runSpacing: 16,
                  alignment: WrapAlignment.center,
                  children: AppContent.stats.map((stat) {
                    return Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          stat.value,
                          style: theme.textTheme.headlineMedium?.copyWith(
                            color: AppTheme.primary,
                            fontWeight: FontWeight.w800,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          stat.label,
                          style: theme.textTheme.bodySmall?.copyWith(
                            color: isDark
                                ? AppTheme.textMuted
                                : AppTheme.textMutedLight,
                          ),
                        ),
                      ],
                    );
                  }).toList(),
                ),
              )
                  .animate()
                  .fadeIn(duration: 600.ms, delay: 800.ms),
            ],
          ),
        ),
      ),
    );
  }
}
