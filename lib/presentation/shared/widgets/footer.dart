import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:flutter/material.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(
        horizontal: 20,
        vertical: AppTheme.spacingXl,
      ),
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(
            color: isDark
                ? Colors.white.withValues(alpha: 0.05)
                : Colors.black.withValues(alpha: 0.05),
          ),
        ),
      ),
      child: Column(
        children: [
          Text(
            AppContent.brandName,
            style: theme.textTheme.titleMedium?.copyWith(
              color: AppTheme.primary,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            AppContent.footerTagline,
            style: theme.textTheme.bodySmall?.copyWith(
              color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
            ),
          ),
          const SizedBox(height: AppTheme.spacingMd),
          Text(
            AppContent.footerText,
            style: theme.textTheme.bodySmall?.copyWith(
              color: isDark
                  ? AppTheme.textMuted.withValues(alpha: 0.6)
                  : AppTheme.textMutedLight.withValues(alpha: 0.6),
            ),
          ),
        ],
      ),
    );
  }
}
