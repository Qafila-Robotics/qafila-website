---
name: Autonomous Caravan Core
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#debfc2'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#a58a8d'
  outline-variant: '#574144'
  surface-tint: '#ffb2bd'
  primary: '#ffb2bd'
  on-primary: '#670024'
  primary-container: '#8a1538'
  on-primary-container: '#ff97a8'
  inverse-primary: '#aa304f'
  secondary: '#e0c298'
  on-secondary: '#402d0f'
  secondary-container: '#584323'
  on-secondary-container: '#ceb188'
  tertiary: '#00e2a0'
  on-tertiary: '#003825'
  tertiary-container: '#005137'
  on-tertiary-container: '#00cd92'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9dd'
  primary-fixed-dim: '#ffb2bd'
  on-primary-fixed: '#400013'
  on-primary-fixed-variant: '#8a1538'
  secondary-fixed: '#fedeb2'
  secondary-fixed-dim: '#e0c298'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#584323'
  tertiary-fixed: '#43ffbb'
  tertiary-fixed-dim: '#00e2a0'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005138'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
  surface-base: '#0B0C0E'
  surface-elevated: '#14171D'
  surface-overlay: '#1C2028'
  border-subtle: '#252B35'
  border-glow: '#8A15384D'
  status-operational: '#00E5A3'
  status-warning: '#E5A93C'
  status-critical: '#FF334B'
  status-offline: '#616E80'
  sand-metallic: '#9D7F54'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

The design system bridges autonomous robotics engineering with high-precision enterprise telemetry. Built for mission controllers, autonomous vehicle operators, and robotics engineers coordinating mixed fleets (humanoids, quadrupeds, autonomous drones, and heavy UGVs across harsh terrain and industrial facilities), the visual language communicates reliability, spatial precision, and sovereign technological authority.

The aesthetic fuses **Precision Dark Engineering** with subtle **Gulf Futurist Refinement**. It trades conventional light-beige SaaS presentations for a deep obsidian/carbon substrate punctuated by calibrated Qatari maroon accents, warm desert bronze telemetry traces, and surgical laser micro-accents. Elements rely on razor-thin semi-luminescent borders, monospaced spatial telemetry readouts, micro-indicators, and structural density paired with breathing room around complex spatial maps.

## Colors

The palette establishes an industrial mission-control atmosphere anchored in dark charcoal/obsidian surfaces, preserving night vision in field operations and reducing screen fatigue during prolonged fleet monitoring. 

- **Primary (`#8A1538`)**: National maroon redefined as high-tech crimson. Used intentionally for high-priority CTA states, focal command nodes, primary navigation active indicators, and mission confirmation triggers. Never overused as blanket backgrounds; rather, treated as an electric, purposeful pulse.
- **Secondary (`#C5A880`) & Sand Metallic (`#9D7F54`)**: Polished Gulf sand and bronze tones reflecting regional provenance. Assigned to secondary telemetry metrics, auxiliary mission labels, spatial coordinates, and hardware payload identifiers.
- **Tertiary (`#00E5A3`)**: High-visibility phosphor green reserved for telemetry health, active RTK GPS locks, lidar heartbeat confirmations, and nominal operational state tags.
- **Neutral & Surfaces (`#0B0C0E`, `#0F1115`, `#14171D`, `#1C2028`)**: Deep obsidian to cool graphite tiers providing spatial hierarchy without heavy visual clutter.

## Typography

The typographic hierarchy establishes clear structural distinction across strategic content and real-time robotic telemetry.

1. **Headlines (`Space Grotesk`)**: Technical, geometric, and authoritative. Its sharp angles and mechanical curves echo robotic joints, aerospace surfaces, and algorithmic precision.
2. **Body & Interface (`IBM Plex Sans`)**: Retains continuity with the foundational brand heritage while delivering immaculate cross-platform legibility for operational protocols, mission logs, and technical documentation.
3. **Telemetry & Data Panels (`JetBrains Mono`)**: Applied to all hardware IDs, latency readings (ms), battery levels (%), GPS latitude/longitude, and ROS2 topic payloads. Monospaced tabular alignment prevents visual jitter during live streaming telemetry feeds.

## Layout & Spacing

The layout is built on a high-density 12-column responsive grid capable of switching between expansive architectural landing showcases and modular, multi-panel mission cockpits.

- **Desktop (1200px+)**: 12 columns, 24px (`1.5rem`) gutters, with 48px (`3rem`) margins framing the operational stage. Max content container is capped at 1440px for editorial sections, while operational maps stretch full-bleed (`100vw`).
- **Tablet (768px - 1199px)**: 8 columns, 16px (`1rem`) gutters, 24px (`1.5rem`) margins. Multi-robot cards convert into two-column modular grids.
- **Mobile (< 768px)**: 4 columns, 16px (`1rem`) gutters, 20px (`1.25rem`) margins. Status panels collapse into swipeable cards or vertical diagnostic accordions.

Rhythm is strictly mathematical based on a 4px/8px modular scale. Dense grouping (`space-xs` to `space-sm`) is enforced within telemetry data clusters (e.g., Robot ID, battery level, velocity), while generous negative space (`space-2xl` to `space-3xl`) isolates major capability sections to prevent cognitive overload.

## Elevation & Depth

Visual depth is achieved through layered semi-translucent dark surfaces and calibrated edge illumination rather than heavy organic drop shadows.

- **Level 0 (Canvas Base)**: Pure `#0B0C0E` background with a subtle ambient radial vignette in brand maroon (`radial-gradient(ellipse at 80% 0%, #8A153818 0%, transparent 60%)`).
- **Level 1 (Structural Containers & Map Cards)**: `#14171D` with 1px hairline border of `#252B35`. Non-elevated, grounding the layout into structured data docks.
- **Level 2 (Interactive Modules & Robot Cards)**: `#181C24` backed by subtle backdrop filtering (`backdrop-filter: blur(12px)`). Borders receive a soft ambient glow on hover (`box-shadow: 0 0 0 1px #8A153866, 0 8px 24px -4px rgba(0, 0, 0, 0.6)`).
- **Level 3 (Command Overlays, Modals, Emergency Controls)**: `#1C2028` with an inset micro-highlight border `1px solid rgba(255, 255, 255, 0.08)`, a distinct outer border in `#8A1538`, and deep ambient shadow (`0 20px 40px rgba(0, 0, 0, 0.8)`).

## Shapes

The design system employs a **Soft Precision (`1`)** shape language. Rather than bubbly curves or sterile zero-radius brutalist boxes, elements use disciplined 4px to 8px corner radii, reflecting precision-milled CNC chassis, sensor modules, and avionics instrumentation.

- **Micro elements (Badges, Chips, Status Dots)**: 4px radius (`0.25rem`).
- **Standard UI (Buttons, Inputs, Metric Cells)**: 6px radius (`0.375rem`).
- **Cards & Data Docks (`rounded-lg`)**: 8px radius (`0.5rem`).
- **Command Overlays & Dialogs (`rounded-xl`)**: 12px radius (`0.75rem`).
- **Circular Indicators**: 9999px for status ping beacons and sensor reticles only.

## Components

### Buttons
- **Primary Mission Button**: Background `#8A1538`, text `#FFFFFF`, font `Space Grotesk` medium, border `1px solid #B01E49`. Interactive state triggers a 12px crimson perimeter glow (`0 0 16px #8A153880`).
- **Secondary / Telemetry Button**: Background `transparent`, text `#C5A880`, border `1px solid #9D7F544D`. On hover: surface shifts to `#C5A88015` with crisp bronze outline enhancement.
- **Destructive / Emergency Stop (E-STOP)**: Hexagonal or sharp-cornered button in high-saturation crimson `#FF334B` with animated red strobe border.

### Telemetry Badges & Status Chips
- Composed of `JetBrains Mono` label text paired with a dynamic pulsing status beacon.
- **Active / Online**: `#00E5A315` surface, `#00E5A3` text, with a 6px green LED dot displaying a 1.5s CSS pulse ring.
- **In Mission / Transit**: `#C5A88015` surface, `#C5A880` text, displaying step count or route indicator.
- **Fault / Warning**: `#FF334B1A` surface, `#FF334B` border with warning code indicator (e.g., `LINK_DEGRADED [42ms]`).

### Robot Fleet Cards
- Constructed with surface tier `#14171D`, 8px corner radius, and 1px `#252B35` border.
- Features a designated top telemetry bar: displays robot hardware class (Humanoid, Quadruped, Drone, UGV), real-time battery percentage with fractional charging bar, and network latency badge.
- Interactive states invoke an edge glow in `#8A1538` accompanied by subtle grid reticle watermark reveals.

### Input Fields & Controls
- Surface `#0F1115` embedded with inset 1px border `#252B35`.
- Text typed in `IBM Plex Sans`, placeholders styled in `#616E80`. Focus triggers a razor-sharp `#8A1538` border accompanied by an ultra-fine inner outline `#C5A88033`.

### Telemetry Stat Blocks
- Minimal modular KPI cards with upper label in `label-caps` (`Space Grotesk`, uppercase, letter-spacing `0.12em`, muted bronze `#9D7F54`), large numerical readout in `JetBrains Mono`, and micro line chart or status delta sparkline at the base.