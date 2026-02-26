import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:flutter/material.dart';

class ProcessStepCard extends StatelessWidget {
  final ProcessStep step;

  const ProcessStepCard({required this.step, super.key});

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
          Text(
            step.number,
            style: theme.textTheme.displaySmall?.copyWith(
              color: AppTheme.primary.withValues(alpha: 0.3),
              fontWeight: FontWeight.w900,
            ),
          ),
          const SizedBox(height: AppTheme.spacingSm),
          Text(
            step.title,
            style: theme.textTheme.titleLarge,
          ),
          const SizedBox(height: AppTheme.spacingSm),
          Text(
            step.description,
            style: theme.textTheme.bodyMedium?.copyWith(
              color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
            ),
          ),
        ],
      ),
    );
  }
}
