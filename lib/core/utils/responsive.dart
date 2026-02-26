import 'package:flutter/material.dart';

class Responsive {
  static const double mobileBreakpoint = 600;
  static const double tabletBreakpoint = 900;
  static const double desktopBreakpoint = 1200;

  static bool isMobile(BuildContext context) =>
      MediaQuery.sizeOf(context).width < mobileBreakpoint;

  static bool isTablet(BuildContext context) {
    final double width = MediaQuery.sizeOf(context).width;
    return width >= mobileBreakpoint && width < desktopBreakpoint;
  }

  static bool isDesktop(BuildContext context) =>
      MediaQuery.sizeOf(context).width >= desktopBreakpoint;

  static double contentMaxWidth(BuildContext context) {
    final double width = MediaQuery.sizeOf(context).width;
    if (width >= desktopBreakpoint) return 1200;
    if (width >= tabletBreakpoint) return 900;
    return width;
  }

  static double horizontalPadding(BuildContext context) {
    if (isDesktop(context)) return 80;
    if (isTablet(context)) return 40;
    return 20;
  }

  static int gridColumns(BuildContext context) {
    if (isDesktop(context)) return 3;
    if (isTablet(context)) return 2;
    return 1;
  }
}
