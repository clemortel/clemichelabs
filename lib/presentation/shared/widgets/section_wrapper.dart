import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:clemichelabs/core/utils/responsive.dart';
import 'package:flutter/material.dart';

class SectionWrapper extends StatelessWidget {
  final GlobalKey sectionKey;
  final String? title;
  final String? subtitle;
  final Widget child;
  final Color? backgroundColor;
  final EdgeInsets? padding;

  const SectionWrapper({
    required this.sectionKey,
    required this.child,
    this.title,
    this.subtitle,
    this.backgroundColor,
    this.padding,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final double hPadding = Responsive.horizontalPadding(context);

    return Container(
      key: sectionKey,
      width: double.infinity,
      color: backgroundColor,
      padding: padding ??
          EdgeInsets.symmetric(
            horizontal: hPadding,
            vertical: AppTheme.spacing3xl,
          ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Column(
            children: [
              if (title != null) ...[
                Text(
                  title!,
                  style: theme.textTheme.displaySmall,
                  textAlign: TextAlign.center,
                ),
                if (subtitle != null) ...[
                  const SizedBox(height: AppTheme.spacingSm),
                  Text(
                    subtitle!,
                    style: theme.textTheme.bodyLarge?.copyWith(
                      color: theme.brightness == Brightness.dark
                          ? AppTheme.textMuted
                          : AppTheme.textMutedLight,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
                const SizedBox(height: AppTheme.spacing2xl),
              ],
              child,
            ],
          ),
        ),
      ),
    );
  }
}
