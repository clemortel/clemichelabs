import 'package:clemichelabs/application/theme/theme_mode_provider.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:clemichelabs/presentation/home/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ClemicheLabsApp extends ConsumerWidget {
  const ClemicheLabsApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ThemeMode themeMode = ref.watch(themeModeProvider);

    return MaterialApp(
      title: 'ClemicheLabs',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: themeMode,
      home: const HomeScreen(),
    );
  }
}
