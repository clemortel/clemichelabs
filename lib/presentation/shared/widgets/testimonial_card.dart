import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:flutter/material.dart';

class TestimonialCard extends StatelessWidget {
  final TestimonialItem testimonial;

  const TestimonialCard({required this.testimonial, super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;

    return Container(
      padding: const EdgeInsets.all(AppTheme.spacingLg),
      decoration: BoxDecoration(
        color: isDark ? AppTheme.cardDark : Colors.white,
        borderRadius: BorderRadius.circular(AppTheme.radiusMd),
        border: Border.all(
          color: isDark
              ? Colors.white.withValues(alpha: 0.05)
              : Colors.black.withValues(alpha: 0.05),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(
            Icons.format_quote,
            color: AppTheme.primary.withValues(alpha: 0.4),
            size: 32,
          ),
          const SizedBox(height: AppTheme.spacingSm),
          Text(
            '"${testimonial.quote}"',
            style: theme.textTheme.bodyLarge?.copyWith(
              fontStyle: FontStyle.italic,
              height: 1.6,
            ),
          ),
          const SizedBox(height: AppTheme.spacingMd),
          Text(
            testimonial.author,
            style: theme.textTheme.titleSmall,
          ),
          Text(
            testimonial.role,
            style: theme.textTheme.bodySmall?.copyWith(
              color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
            ),
          ),
        ],
      ),
    );
  }
}
