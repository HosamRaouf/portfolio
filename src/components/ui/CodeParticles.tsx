"use client";
import { useEffect, useRef } from "react";

const CODE_SNIPPETS = [
  // Dart keywords
  "final", "const", "var", "void", "int", "double", "String", "bool", "List",
  "Map", "Set", "dynamic", "null", "true", "false", "return", "if", "else",
  "for", "while", "do", "switch", "case", "break", "continue", "class",
  "extends", "implements", "with", "mixin", "abstract", "static", "late",
  "required", "async", "await", "Future", "Stream", "yield", "try", "catch",
  "finally", "throw", "on", "is", "as", "new", "super", "this", "get", "set",
  "import", "export", "library", "part", "typedef", "enum", "factory",
  // Flutter widgets
  "Widget", "StatelessWidget", "StatefulWidget", "State<T>", "BuildContext",
  "Scaffold", "AppBar", "Column", "Row", "Stack", "Container", "SizedBox",
  "Padding", "Center", "Align", "Expanded", "Flexible", "ListView", "GridView",
  "Text()", "Icon()", "Image()", "GestureDetector", "InkWell", "MaterialApp",
  "Navigator", "Route", "PageRoute", "Theme", "Colors", "TextStyle",
  "EdgeInsets", "Decoration", "BoxDecoration", "BorderRadius", "ClipRRect",
  "AnimatedBuilder", "AnimatedContainer", "Hero()", "FutureBuilder",
  "StreamBuilder", "ValueListenableBuilder", "Consumer<T>", "BlocBuilder",
  "GetBuilder", "GetX()", "Obx()", "Provider", "ChangeNotifier",
  // Flutter methods/patterns
  "@override", "build()", "initState()", "dispose()", "setState((){})",
  "context.read<T>()", "context.watch<T>()", "Navigator.push()",
  "Navigator.pop()", "MediaQuery.of()", "Theme.of()", "showDialog()",
  "SnackBar()", "ScaffoldMessenger", "FocusScope.of()", "FocusNode()",
  "TextEditingController()", "GlobalKey<>()", "ObjectKey()",
  // Common patterns
  ".map((e) =>)", ".where((e) =>)", ".toList()", ".first", ".last", ".isEmpty",
  "?.call()", "?? null", "..cascade", "=> expression", "is! type",
  "copyWith()", ".toString()", "jsonDecode()", "jsonEncode()", "http.get()",
  "dio.post()", "SharedPreferences", "Hive.box()", "sqflite",
  // Architecture
  "Repository", "UseCase", "Bloc", "Cubit", "GetxController", "ViewModel",
  "DataSource", "Entity", "Model", "Mapper", "Failure", "Either<L,R>",
  "dartz", "freezed", "injectable", "GetIt", "go_router",
];

interface Particle {
  text: string;
  // Angle from center (radians)
  angle: number;
  // Distance from center as fraction of max (0 = center, 1 = edge)
  depth: number;
  // How fast this particle zooms out
  speed: number;
  // Base size at full depth
  maxSize: number;
  // Color: 0=cyan, 1=purple, 2=pink
  colorIdx: number;
}

const COLORS = [
  "rgba(0,240,255,",   // neon-cyan
  "rgba(122,95,255,",  // neon-purple
  "rgba(255,46,136,",  // neon-pink
];

export function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let cx = 0, cy = 0; // canvas center

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cx = canvas.width / 2;
      cy = canvas.height / 2;
      init();
    };

    const spawn = (): Particle => ({
      text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
      angle: Math.random() * Math.PI * 2,
      depth: Math.random(),          // start spread across all depths
      speed: 0.003 + Math.random() * 0.005, // ~0.3–0.8% of canvas per frame
      maxSize: 9 + Math.random() * 10,
      colorIdx: Math.floor(Math.random() * 3),
    });

    const init = () => {
      // Fill with ~180 particles spread across all depths so screen isn't empty on load
      particles = Array.from({ length: 180 }, () => spawn());
    };

    const draw = () => {
      // Fade trail — deep transparent clear for the zoom tunnel feel
      ctx.fillStyle = "rgba(5,7,13,0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Advance depth (0=center → 1=edge)
        p.depth += p.speed;

        if (p.depth >= 1) {
          // Reset to center
          Object.assign(p, spawn());
          p.depth = 0;
        }

        // Ease: slow near center, accelerate toward edge
        const eased = p.depth * p.depth;

        // Convert polar → cartesian
        const maxRadius = Math.max(canvas.width, canvas.height) * 0.85;
        const r = eased * maxRadius;
        const x = cx + Math.cos(p.angle) * r;
        const y = cy + Math.sin(p.angle) * r;

        // Size grows with depth
        const size = p.maxSize * eased;
        if (size < 2) continue; // skip tiny particles

        // Opacity: appears from nothing, fades at edge
        const opacity = Math.min(eased * 4, 1) * (1 - Math.pow(p.depth, 3)) * 0.85;

        ctx.font = `${size}px monospace`;
        ctx.fillStyle = `${COLORS[p.colorIdx]}${opacity})`;
        ctx.fillText(p.text, x, y);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-screen pointer-events-none z-0"
    />
  );
}
