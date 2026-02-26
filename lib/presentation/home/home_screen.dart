import 'package:clemichelabs/application/scroll/scroll_provider.dart';
import 'package:clemichelabs/presentation/sections/about_section.dart';
import 'package:clemichelabs/presentation/sections/contact_section.dart';
import 'package:clemichelabs/presentation/sections/hero_section.dart';
import 'package:clemichelabs/presentation/sections/portfolio_section.dart';
import 'package:clemichelabs/presentation/sections/process_section.dart';
import 'package:clemichelabs/presentation/sections/services_section.dart';
import 'package:clemichelabs/presentation/sections/testimonials_section.dart';
import 'package:clemichelabs/presentation/shared/widgets/footer.dart';
import 'package:clemichelabs/presentation/shared/widgets/gradient_background.dart';
import 'package:clemichelabs/presentation/shared/widgets/nav_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HomeScreen extends ConsumerStatefulWidget {
  const HomeScreen({super.key});

  @override
  ConsumerState<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends ConsumerState<HomeScreen> {
  late final ScrollController _scrollController;

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();
    _scrollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    ref.read(activeSectionProvider.notifier).updateFromScroll(
          _scrollController,
        );
  }

  @override
  Widget build(BuildContext context) {
    final Map<Section, GlobalKey> keys =
        ref.read(activeSectionProvider.notifier).sectionKeys;

    return Scaffold(
      body: GradientBackground(
        child: Column(
          children: [
            const NavBar(),
            Expanded(
              child: SingleChildScrollView(
                controller: _scrollController,
                child: Column(
                  children: [
                    HeroSection(sectionKey: keys[Section.hero]!),
                    ServicesSection(sectionKey: keys[Section.services]!),
                    PortfolioSection(
                      sectionKey: keys[Section.portfolio]!,
                    ),
                    AboutSection(sectionKey: keys[Section.about]!),
                    ProcessSection(sectionKey: keys[Section.process]!),
                    TestimonialsSection(
                      sectionKey: keys[Section.testimonials]!,
                    ),
                    ContactSection(sectionKey: keys[Section.contact]!),
                    const Footer(),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
