import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// ClemicheLabs Design System (dark hacker mode default)
/// - Primary: Cyan (#00f2ff)
/// - Background Dark: (#0f2223)
/// - Background Light: (#f5f8f8)
/// - Card Dark: (#162e2f)
/// - Accent Dark: (#1a3536)
/// - Text Muted: (#8ba8a9)
class AppTheme {
  // Brand Colors
  static const Color primary = Color(0xFF00f2ff);
  static const Color backgroundDark = Color(0xFF0f2223);
  static const Color backgroundLight = Color(0xFFF5f8f8);
  static const Color cardDark = Color(0xFF162e2f);
  static const Color cardLight = Color(0xFFFFFFFF);
  static const Color accentDark = Color(0xFF1a3536);
  static const Color textMuted = Color(0xFF8ba8a9);
  static const Color textMutedLight = Color(0xFF6b7b7c);

  // Status Colors
  static const Color success = Color(0xFF10b981);
  static const Color error = Color(0xFFef4444);
  static const Color warning = Color(0xFFf59e0b);

  // Border Radius
  static const double radiusSm = 8.0;
  static const double radiusMd = 16.0;
  static const double radiusLg = 32.0;
  static const double radiusFull = 9999.0;

  // Spacing
  static const double spacingXs = 4.0;
  static const double spacingSm = 8.0;
  static const double spacingMd = 16.0;
  static const double spacingLg = 24.0;
  static const double spacingXl = 32.0;
  static const double spacing2xl = 48.0;
  static const double spacing3xl = 64.0;

  // Shadows
  static List<BoxShadow> get neonGlow => [
        BoxShadow(
          color: primary.withValues(alpha: 0.4),
          blurRadius: 20,
          spreadRadius: 0,
        ),
      ];

  static List<BoxShadow> get subtleGlow => [
        BoxShadow(
          color: primary.withValues(alpha: 0.2),
          blurRadius: 12,
          spreadRadius: 0,
        ),
      ];

  // Glassmorphism helper
  static BoxDecoration glassmorphism({Color? color, double opacity = 0.8}) {
    return BoxDecoration(
      color: (color ?? cardDark).withValues(alpha: opacity),
      borderRadius: BorderRadius.circular(radiusMd),
      border: Border.all(
        color: Colors.white.withValues(alpha: 0.1),
        width: 1,
      ),
    );
  }

  // Gradient background
  static BoxDecoration meshGradientDecoration() {
    return BoxDecoration(
      gradient: RadialGradient(
        center: const Alignment(-1.0, -1.0),
        radius: 2.0,
        colors: [primary.withValues(alpha: 0.08), backgroundDark],
        stops: const [0.0, 0.5],
      ),
    );
  }

  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primary,
        brightness: Brightness.dark,
        primary: primary,
        secondary: primary,
        surface: cardDark,
        onSurface: Colors.white,
      ),
      scaffoldBackgroundColor: backgroundDark,
      textTheme: _textTheme(Brightness.dark),
      appBarTheme: AppBarTheme(
        backgroundColor: backgroundDark.withValues(alpha: 0.8),
        foregroundColor: Colors.white,
        elevation: 0,
        centerTitle: true,
        titleTextStyle: GoogleFonts.spaceGrotesk(
          fontSize: 18,
          fontWeight: FontWeight.bold,
          color: Colors.white,
          letterSpacing: -0.5,
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: primary,
          foregroundColor: backgroundDark,
          padding: const EdgeInsets.symmetric(
            horizontal: 24,
            vertical: 16,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(radiusFull),
          ),
          textStyle: GoogleFonts.spaceGrotesk(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            letterSpacing: 0.5,
          ),
          elevation: 0,
        ),
      ),
      cardTheme: CardThemeData(
        color: cardDark,
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(radiusMd),
          side: BorderSide(
            color: Colors.white.withValues(alpha: 0.05),
          ),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: accentDark,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusSm),
          borderSide: BorderSide.none,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusSm),
          borderSide: BorderSide(
            color: Colors.white.withValues(alpha: 0.1),
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusSm),
          borderSide: BorderSide(
            color: primary.withValues(alpha: 0.5),
            width: 2,
          ),
        ),
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 20,
          vertical: 16,
        ),
        hintStyle: GoogleFonts.spaceGrotesk(
          color: textMuted,
        ),
      ),
      dividerTheme: DividerThemeData(
        color: Colors.white.withValues(alpha: 0.05),
        thickness: 1,
      ),
    );
  }

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primary,
        brightness: Brightness.light,
        primary: primary,
        secondary: primary,
        surface: cardLight,
        onSurface: Colors.black87,
      ),
      scaffoldBackgroundColor: backgroundLight,
      textTheme: _textTheme(Brightness.light),
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.white.withValues(alpha: 0.8),
        foregroundColor: Colors.black87,
        elevation: 0,
        centerTitle: true,
        titleTextStyle: GoogleFonts.spaceGrotesk(
          fontSize: 18,
          fontWeight: FontWeight.bold,
          color: Colors.black87,
          letterSpacing: -0.5,
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: const Color(0xFF0d9da6),
          foregroundColor: Colors.white,
          padding: const EdgeInsets.symmetric(
            horizontal: 24,
            vertical: 16,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(radiusFull),
          ),
          textStyle: GoogleFonts.spaceGrotesk(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            letterSpacing: 0.5,
          ),
          elevation: 0,
        ),
      ),
      cardTheme: CardThemeData(
        color: cardLight,
        elevation: 2,
        shadowColor: Colors.black.withValues(alpha: 0.1),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(radiusMd),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: Colors.black.withValues(alpha: 0.05),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusSm),
          borderSide: BorderSide.none,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusSm),
          borderSide: BorderSide(
            color: Colors.black.withValues(alpha: 0.1),
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(radiusSm),
          borderSide: const BorderSide(
            color: Color(0xFF0d9da6),
            width: 2,
          ),
        ),
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 20,
          vertical: 16,
        ),
        hintStyle: GoogleFonts.spaceGrotesk(
          color: textMutedLight,
        ),
      ),
    );
  }

  static TextTheme _textTheme(Brightness brightness) {
    final Color textColor =
        brightness == Brightness.light ? Colors.black87 : Colors.white;
    final Color mutedColor =
        brightness == Brightness.light ? textMutedLight : textMuted;

    return TextTheme(
      displayLarge: GoogleFonts.spaceGrotesk(
        fontSize: 56,
        fontWeight: FontWeight.w800,
        color: textColor,
        height: 1.0,
        letterSpacing: -2.0,
      ),
      displayMedium: GoogleFonts.spaceGrotesk(
        fontSize: 40,
        fontWeight: FontWeight.w800,
        color: textColor,
        height: 1.1,
        letterSpacing: -1.0,
      ),
      displaySmall: GoogleFonts.spaceGrotesk(
        fontSize: 32,
        fontWeight: FontWeight.w800,
        color: textColor,
        height: 1.2,
        letterSpacing: -0.5,
      ),
      headlineLarge: GoogleFonts.spaceGrotesk(
        fontSize: 28,
        fontWeight: FontWeight.bold,
        color: textColor,
        height: 1.2,
        letterSpacing: -0.5,
      ),
      headlineMedium: GoogleFonts.spaceGrotesk(
        fontSize: 24,
        fontWeight: FontWeight.bold,
        color: textColor,
        height: 1.2,
        letterSpacing: -0.5,
      ),
      headlineSmall: GoogleFonts.spaceGrotesk(
        fontSize: 20,
        fontWeight: FontWeight.bold,
        color: textColor,
        height: 1.3,
        letterSpacing: -0.3,
      ),
      titleLarge: GoogleFonts.spaceGrotesk(
        fontSize: 20,
        fontWeight: FontWeight.w600,
        color: textColor,
        height: 1.3,
        letterSpacing: -0.15,
      ),
      titleMedium: GoogleFonts.spaceGrotesk(
        fontSize: 18,
        fontWeight: FontWeight.w600,
        color: textColor,
        height: 1.4,
      ),
      titleSmall: GoogleFonts.spaceGrotesk(
        fontSize: 16,
        fontWeight: FontWeight.w600,
        color: textColor,
        height: 1.4,
      ),
      bodyLarge: GoogleFonts.spaceGrotesk(
        fontSize: 16,
        fontWeight: FontWeight.normal,
        color: textColor,
        height: 1.6,
      ),
      bodyMedium: GoogleFonts.spaceGrotesk(
        fontSize: 14,
        fontWeight: FontWeight.normal,
        color: textColor,
        height: 1.5,
      ),
      bodySmall: GoogleFonts.spaceGrotesk(
        fontSize: 12,
        fontWeight: FontWeight.normal,
        color: mutedColor,
        height: 1.5,
      ),
      labelLarge: GoogleFonts.spaceGrotesk(
        fontSize: 14,
        fontWeight: FontWeight.bold,
        color: textColor,
        letterSpacing: 1.2,
      ),
      labelMedium: GoogleFonts.spaceGrotesk(
        fontSize: 12,
        fontWeight: FontWeight.bold,
        color: textColor,
        letterSpacing: 1.0,
      ),
      labelSmall: GoogleFonts.spaceGrotesk(
        fontSize: 10,
        fontWeight: FontWeight.bold,
        color: textColor,
        letterSpacing: 1.2,
      ),
    );
  }
}
