import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:flutter/material.dart';

class GradientBackground extends StatelessWidget {
  final Widget child;

  const GradientBackground({required this.child, super.key});

  @override
  Widget build(BuildContext context) {
    final bool isDark = Theme.of(context).brightness == Brightness.dark;

    if (!isDark) {
      return Container(
        color: AppTheme.backgroundLight,
        child: child,
      );
    }

    return Container(
      decoration: BoxDecoration(
        color: AppTheme.backgroundDark,
        gradient: RadialGradient(
          center: const Alignment(-0.8, -0.6),
          radius: 2.5,
          colors: [
            AppTheme.primary.withValues(alpha: 0.06),
            AppTheme.backgroundDark,
          ],
          stops: const [0.0, 0.4],
        ),
      ),
      child: child,
    );
  }
}
