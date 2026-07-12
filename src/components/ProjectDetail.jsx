import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Cpu, Database, Activity, Zap, Radio, Shield, Server, FileText, CheckCircle2, Maximize2, Terminal } from 'lucide-react';

const ProjectDetail = ({ projectIndex, onBack }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);
  
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Mock terminal log sequence for a cool industrial-tech vibe
    let logs = [];
    if (projectIndex === 1) {
      logs = [
        "SYSTEM: Initializing UART/TTL telemetry...",
        "POLL: Requesting sensor registers...",
        "DATA: Chamber Temperature [READ OK]",
        "DATA: Core Temperature [READ OK]",
        "DATA: Humidity (Moisture) [READ OK]",
        "RELAY: Power Switch Status verified",
        "RELAY: Heater Status verified",
        "RELAY: Fan Status verified",
        "RELAY: AirFlow Status verified",
        "SYSTEM: High Limit Switch Status verified",
        "SYSTEM: HMI UI updated successfully."
      ];
    } else {
      logs = [
        "SYSTEM: Initializing diagnostic sequence...",
        "BOOT: CPU core ESP32-S active [240MHz, Dual-Core]",
        "NET: W5500 Ethernet controller detected",
        "NET: DHCP request sent... IP allocated: 192.168.1.144",
        "STORAGE: Micro-SD card mounted [FAT32, 32GB free]",
        "SENSORS: Thermocouple cold-junction compensation active",
        "SENSORS: High-voltage telemetry line calibrated",
        "SENSORS: Current telemetry coil verified [3000A scale]",
        "EMC: Shielding integrity check: PASS [100%]",
        "SYSTEM: All systems operational. Monitoring grid..."
      ];
    }

    setTerminalLogs([]);
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setTerminalLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [projectIndex]);

  const projectsDetailData = [
    {
      title: "HIGH PERFORMANCE CENTRAL PROCESSING CORE",
      subtitle: "INDUSTRIAL GRID MONITORING & TELEMETRY CONTROLLER",
      description: "A high-performance processing unit designed using ALTIUM and engineered for high-availability grid monitoring. Features redundant data logging, full industrial sensor integration (thermocouple, pressure, humidity, high-current telemetry of upto 3000Amps sensing, high-voltage telemetry etc), and hardware-level EMI/EMC mitigation.",
      image: "./images/project1.jpg",
      tags: ["Altium Designer", "High-Speed Layout", "PLC Engineering", "Signal Integrity (SI)", "W5500 Ethernet", "EMI/EMC Compliance", "Secure OTA"],
      icon: <Database className="w-5 h-5 text-primary" />,
      specs: [
        { label: "Processor", value: "ESP32-S 32-bit Dual-Core 240MHz" },
        { label: "Ethernet Controller", value: "Wiznet W5500 (SPI, Hardwired TCP/IP)" },
        { label: "Current Telemetry", value: "Up to 3000Amps Non-Intrusive Split-Core CT" },
        { label: "Voltage Telemetry", value: "Isolated 0-500V AC/DC Precision Front-End" },
        { label: "RTC Backup Battery", value: "CR1220 Coin Cell Lithium Battery" },
        { label: "Storage", value: "Micro-SD Slot supporting FAT32 logging" },
        { label: "Thermal & Environmental", value: "K-Type Thermocouple, I2C Humidity & Barometric Sensors" }
      ],
      industrialUsage: [
        "Real-time grid load balancing and high-current monitoring in multi-megawatt solar inverter stations.",
        "Precision thermal monitoring for heavy boiler and steam generator instrumentation.",
        "Edge telemetry logging for industrial automation networks requiring reliable local and cloud-based data storage.",
        "Rugged signal processing in high-electromagnetic-noise industrial environments.",
        "Inverter control and automation",
        "IOT control device"
      ],
      gallery: [
        { type: 'image', src: './images/pcb_layout_1.png', label: 'PCB Layout' },
        { type: 'image', src: './images/pcb_mockup_1.png', label: '3-D mockup' },
        { type: 'video', src: './images/cpu_video.mp4', label: 'PCB and HMI test' }
      ]
    },
    {
      title: "Nextion HMI Industrial Controller",
      subtitle: "HUMAN-MACHINE INTERFACE & TEMPERATURE CONTROLLER",
      description: "Advanced touchscreen interface for industrial automation featuring temperature monitoring of oven chamber and transformer core, dynamic setpoint configuration, Humidity monitoring and automated relay control systems.",
      image: "./images/project2.jpg",
      tags: ["Nextion HMI", "Relay Automation", "Embedded C++", "UI/UX", "UART/TTL"],
      icon: <Activity className="w-5 h-5 text-primary" />,
      specs: [
        { label: "Display Size", value: "7.0\" Intelligent Series Resistive Touchscreen" },
        { label: "Communication Protocol", value: " UART TTL" },
        { label: "Processor Core", value: "STM32 MCU on Nextion Module" },
        { label: "Relay Outputs", value: "4-Channel Isolated 10A Relays" },
        { label: "Programming", value: "Nextion Editor UI Design + Embedded C++ on Host MCU" }
      ],
      industrialUsage: [
        "Operator panel for HVAC control systems and commercial refrigeration/oven unit tuning.",
        "Manual override console and telemetry readout for multi-zone industrial furnaces.",
        "Real-time status display and setpoint configuration for industrial oven."
      ]
    },
    {
      title: "IoT Inverter Monitoring System",
      subtitle: "POWER ELECTRONICS TELEMETRY PORTAL",
      description: "Complete power electronics monitoring system with precise voltage/current sensing, real-time power analytics, alarm protection, and a remote web visualization portal.",
      image: "./images/project3.png",
      tags: ["Power Sensing", "IoT", "Web Viz", "Alarm Systems", "ESP32", "WebSockets"],
      icon: <Zap className="w-5 h-5 text-primary" />,
      specs: [
        { label: "Sensors", value: "SCT013 Current Transformer & ZMPT101B Voltage Sensor" },
        { label: "Wireless Protocol", value: "Wi-Fi (IEEE 802.11 b/g/n) with fallback Access Point" },
        { label: "Web Server", value: "Asynchronous ESP WebServer with WebSocket streaming" },
        { label: "Sampling Rate", value: "5000 samples/sec for accurate RMS calculation" },
        { label: "Safety Protections", value: "Overcurrent and Overvoltage automated software trip" }
      ],
      industrialUsage: [
        "Distributed PV inverter farm power production and efficiency logging.",
        "Battery energy storage systems (BESS) real-time state-of-charge tracking.",
        "Sub-panel electrical phase load profiling and power factor analysis."
      ]
    },
    {
      title: "ESP32 Remote Telemetry System",
      subtitle: "LOW-POWER LONG-RANGE DATA ACQUISITION",
      description: "Wireless sensor streaming framework allowing for long-range data collection, real-time wireless monitoring, and intuitive data visualization.",
      image: "./images/project4.png",
      tags: ["Telemetry", "Wireless", "Sensor Streaming", "Visualization", "LoRaWAN", "Deep Sleep"],
      icon: <Radio className="w-5 h-5 text-primary" />,
      specs: [
        { label: "RF Transceiver", value: "SX1276 LoRa Module (868/915 MHz)" },
        { label: "Antenna Gain", value: "3dBi Rugged Outdoor SMA Antenna" },
        { label: "Power Source", value: "LiFePO4 18650 Battery with Solar Panel Charger" },
        { label: "Power Draw", value: "15µA in Deep Sleep mode" },
        { label: "Range Capabilities", value: "Up to 15km line-of-sight telemetry transmissions" }
      ],
      industrialUsage: [
        "Off-grid environmental sensor meshes for agricultural moisture and temperature logging.",
        "Remote tank levels and fluid flow logging in cross-country pipeline networks.",
        "Structural health wireless monitoring tags for bridge and tunnel stress measurement."
      ]
    },
    {
      title: "Inverter TLP250 based driver board with programable chip",
      subtitle: "INVERTER POWER STAGE DRIVER",
      description: "This is used to generate the signal that drive the inverter Power stage.",
      image: "./images/project5.jpg",
      tags: ["Altium", "Power Electronics", "TLP250", "Programmable IC"],
      icon: <Cpu className="w-5 h-5 text-primary" />,
      specs: [
        { label: "Programmable IC", value: "Onboard logic and control chip" },
        { label: "Current Handling", value: "Includes buffer to handle high driving current" },
        { label: "Sensors", value: "Allows for extensive sensor integration" },
        { label: "Control Loop", value: "Has an onboard feedback system" }
      ],
      industrialUsage: [
        "High-power inverter applications requiring isolated gate drivers.",
        "Custom power stages with precise control signal requirements."
      ],
      gallery: [
        { type: 'image', src: './images/pcb_layout_5.png', label: 'PCB Layout' },
        { type: 'image', src: './images/pcb_mockup_5.png', label: '3-D PCB layout' },
        { type: 'image', src: './images/pcb_produced_5.jpg', label: 'Driver board After production' }
      ]
    }
  ];

  const project = projectsDetailData[projectIndex] || projectsDetailData[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto w-full relative z-20"
    >
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-primary transition-colors mb-8 group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        BACK_TO_PORTFOLIO
      </button>

      {/* Header Info */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-primary font-mono text-xs mb-3">
          {project.icon}
          <span>PROJECT_0{projectIndex + 1} // {project.subtitle}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          {project.title}
        </h1>
        <div className="h-[2px] w-24 bg-gradient-to-right from-primary to-secondary"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-12 gap-8 mb-12">
        {/* Left Column - Large Full-Resolution Image */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass-panel rounded-xl overflow-hidden relative group border border-white/10 shadow-lg shadow-black/40">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-contain bg-surface/50 max-h-[500px] mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Hover Fullscreen Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
                className="pointer-events-auto bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
                title="View Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Industrial Diagnostics Terminal */}
          <div className="glass-panel rounded-xl p-5 border border-white/5 bg-black/40">
            <h3 className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary animate-pulse" /> LIVE_DIAGNOSTICS_SHELL
            </h3>
            <div className="font-mono text-xs space-y-1.5 h-36 overflow-y-auto pr-2 bg-black/60 p-3 rounded border border-white/5 text-emerald-400 scrollbar-thin scrollbar-thumb-white/10">
              {terminalLogs.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                  <span>{log}</span>
                </div>
              ))}
              <div className="w-1.5 h-3 bg-emerald-400 inline-block animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Project Metadata and Specs */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Details & Specs Card */}
          <div className="glass-panel rounded-xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-secondary" /> Technical Specifications
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="border-t border-white/5 pt-6">
              <h3 className="text-xs font-mono text-slate-400 mb-3">HARDWARE_&_INTERFACE_SPEC</h3>
              <div className="space-y-3">
                {project.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between text-xs border-b border-white/5 pb-2">
                    <span className="text-slate-400 font-mono">{spec.label}</span>
                    <span className="text-white font-medium text-right ml-4">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-6">
              <h3 className="text-xs font-mono text-slate-400 mb-3">ENGINEERING_SKILL_STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Industrial Usage & Application Cases */}
      <div className="glass-panel rounded-xl p-8 border border-white/10 shadow-lg mb-12 bg-surface/40">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-accent" /> Industrial Deployments & Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.industrialUsage.map((usage, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-surface-light/40 border border-white/5">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {usage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hardware Media Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="glass-panel rounded-xl p-8 border border-white/10 shadow-lg mb-12 bg-surface/40">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-accent" /> Hardware Media Gallery
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent">
            {project.gallery.map((media, i) => (
              <div key={i} className="flex-none w-80 md:w-[450px] snap-center group relative rounded-lg overflow-hidden border border-white/10">
                {media.type === 'image' ? (
                  <img 
                    src={media.src} 
                    alt={media.label} 
                    onClick={() => setIsFullscreen({ src: media.src, title: media.label })}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in" 
                  />
                ) : (
                  <video src={media.src} controls className="w-full h-72 object-cover" />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 backdrop-blur-sm pointer-events-none">
                  <p className="text-sm font-mono text-white text-center">{media.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox / Fullscreen Image Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-full max-h-full"
            >
              <img 
                src={typeof isFullscreen === 'object' ? isFullscreen.src : project.image} 
                alt={typeof isFullscreen === 'object' ? isFullscreen.title : project.title} 
                className="max-w-full max-h-[92vh] object-contain rounded border border-white/10"
              />
              <p className="text-center text-xs font-mono text-slate-400 mt-2">
                {typeof isFullscreen === 'object' ? isFullscreen.title : project.title} — FULL_RESOLUTION_VIEW (Click anywhere to close)
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetail;
