import React, { useState } from "react";
import Header from "./Header";

const LEVEL_NAMES = {
      1: "Level 1 — Software",
  2: "Level 2 — Languages",
  3: "Level 3 — Hardware",
   4: "Level 4 — Protocols",
  5: "Level 5 — Filters",
  6: "Level 6 — Cloud",
  7: "Level 7 — Security",

};

const CHIP_COLORS = {
    1: "blue",
  2: "green",
  3: "gray",
   4: "purple",
  5: "amber",
  6: "teal",
  7: "coral",
  
};

const ROW_COLORS = ["blue", "green", "purple"];
const COL_COLORS = ["blue", "blue", "blue", "teal", "purple", "coral"];
const ROWS = ["TRL", "Duration", "Combined"];
const COLS = ["Tool", "Assessment", "Standalone", "ERP", "AI/ML", "Social"];

const CELLS = {
  "0-0": {
    head: "TRL Tool",
    levels: {
             1: { Software: ["ESA TRL Calculator", "NASA TRL Worksheet", "Horizon Europe Tool"] },
      2: { Languages: ["JavaScript", "Excel VBA", "MATLAB", "Python", "PostgreSQL"] },
      3: { Hardware: ["Laptop", "Browser", "Cloud Server"] },
      4: { Protocols: ["REST API", "File-based", "RPC", "JSON/XML"] },
      5: { Accuracy: ["Accuracy", "Ease of Use", "Budget", "Domain fit"] },
      6: { Cloud: ["AWS", "GCP", "Azure", "CDN"] },
      7: { Security: ["CrowdStrike", "Defender", "AppLocker", "MFA"] },
 
    },
  },
  "0-1": {
    head: "TRL Assessment",
    levels: {
         1: { Software: ["Clean-Growth Tool", "eG Technology Assessment"] },
      2: { Languages: ["JavaScript", "Python", ".NET", "Java (ESA)"] },
      3: { Hardware: ["Standard PC", "Workstation", "Browser System"] },
      4: { Protocols: ["Client-Server", "gRPC", "DB API"] },

      5: { Criteria: ["Accuracy", "Reliability", "Flexibility", "Repeatability"] },
      6: { Cloud: ["AWS", "Azure", "GCP"] },
      7: { Security: ["Splunk", "QRadar", "ELK Stack"] },
     
    },
  },
  "0-2": {
    head: "Standalone TRL",
    levels: {
        1: { Software: ["NASA DAU Tool", "Innovation Assessment"] },
      2: { Languages: ["JavaScript", "Excel VBA", "HTML", "CSS"] },
      3: { Hardware: ["Laptop"] },
      4: { Protocols: ["Local Pipeline", "CLI Tools", "File I/O"] },

      5: { Filters: ["Budget", "Efficiency", "Simplicity"] },
      6: { Cloud: ["GCP", "AWS"] },
      7: { Security: ["BitLocker", "Malwarebytes"] },
      
    },
  },
  "0-3": {
    head: "TRL + ERP",
    levels: {
         1: { Software: ["Siemens Teamcenter", "SAP PLM"] },
      2: { Languages: ["Java", "C++", "JS", "Angular", "ABAP", "SAP HANA SQL"] },
      3: { Hardware: ["Engineering Workstation", "PLM Server Cluster", "Enterprise Data Center"] },
      4: { Protocols: ["REST + SQL", "SOAP", "Event Driven"] },
      5: { Filters: ["Scalability", "Security", "Integration"] },
      6: { Cloud: ["Azure", "SAP Cloud"] },
      7: { Security: ["SAP Security", "Oracle Vault"] },
     },
  },
  "0-4": {
    head: "TRL + AI/ML",
    levels: {  1: { Software: ["CARE AI", "ESA AI Evaluator"] },
      2: { Languages: ["Python", "MATLAB", "JavaScript"] },
      3: { Hardware: ["GPU/CPU ML Servers", "HPC Workstation", "Cloud Server"] },
      4: { Protocols: ["FastAPI", "gRPC", "Airflow", "REST"] },
      5: { Filters: ["Automation", "Intelligence", "Accuracy"] },
      6: { Cloud: ["AWS", "GCP", "Azure"] },
      7: { Security: ["Darktrace", "Defender Cloud"] },
    
    },
  },
  "0-5": {
    head: "TRL + Social",
    levels: {
          1: { Software: ["READINESSnavigator", "Kooplex Platform"] },
      2: { Languages: ["Java", "Python", "Docker", "Eclipse RCP"] },
      3: { Hardware: ["Secure Enterprise Server", "Cloud HPC", "Private Cluster"] },
      5: { Filters: ["Real-time", "Compatibility", "Reach"] },
      4: { Protocols: ["Kafka", "REST APIs", "Event Driven"] },
      6: { Cloud: ["AWS", "GCP"] },
      7: { Security: ["Zscaler", "Cisco Umbrella"] },
    
    },
  },
  "1-0": {
    head: "Duration Tool",
    levels: {
           1: { Software: ["Jira", "MS Project", "Primavera"] },
      2: { Languages: ["JavaScript", "C/Java/Python", "MATLAB"] },
      3: { Hardware: ["Personal Browser", "Windows Workstation"] },
      4: { Protocols: ["JavaScript", "C/Java/Python", "MATLAB", "WebSocket"] },
      5: { Filters: ["Ease of Use", "Speed", "Budget", "Accuracy"] },
      6: { Cloud: ["AWS", "Azure", "GCP"] },
      7: { Security: ["CrowdStrike", "Defender"] },
   
    },
  },
  "1-1": {
    head: "Duration Assessment",
    levels: {
           1: { Software: ["SEER-SEM", "SLIM Estimate"] },
      2: { Languages: ["C++", "C#", ".NET"] },
      3: { Hardware: ["Engineering Workstation", "Personal Computer"] },
      4: { Protocols: ["C++", "C#", ".NET API"] },
      5: { Filters: ["Accuracy", "Reliability", "Cost model"] },
      6: { Cloud: ["AWS", "Azure"] },
      7: { Security: ["Splunk", "ELK"] },
   
    },
  },
  "1-2": {
    head: "Standalone Duration",
    levels: {
            1: { Software: ["COCOMO II", "SEER SIM"] },
      2: { Languages: ["C/C++", "Python", "MATLAB", "JavaScript"] },
      3: { Hardware: ["Windows PC", "Workstation"] },
      4: { Protocols: ["C/C++", "CLI pipeline", "Local DB"] },
      5: { Filters: ["Budget", "Efficiency", "Portability"] },
      6: { Cloud: ["GCP", "AWS"] },
      7: { Security: ["BitLocker", "Local AV"] },
  
    },
  },
  "1-3": {
    head: "Duration + ERP",
    levels: {
         1: { Software: ["SAP S/4HANA", "Odoo ERP"] },
      2: { Languages: ["ABAP", "SAP HANA DB", ".NET", "PostgreSQL"] },
      3: { Hardware: ["Enterprise Server", "Oracle Cloud", "Enterprise Windows Server"] },
      4: { Protocols: ["ABAP", "SAP HANA DB", ".NET", "PostgreSQL"] },
      5: { Filters: ["Scalability", "Security", "ERP fit"] },
      6: { Cloud: ["Azure", "SAP Cloud", "Oracle Cloud"] },
      7: { Security: ["SAP Security", "Oracle Vault"] },
     
    },
  },
  "1-4": {
    head: "Duration + AI/ML",
    levels: {
          1: { Software: ["Forecast AI", "ALICE Tech"] },
      2: { Languages: ["Python", "GraphQL", "C++"] },
      3: { Hardware: ["Distributed CPU/GPU Cloud", "HPC Servers"] },
      4: { Protocols: ["Python", "GraphQL", "C++", "ML APIs"] },
      5: { Filters: ["Automation", "Intelligence", "Predictive"] },
      6: { Cloud: ["AWS", "GCP", "Azure"] },
      7: { Security: ["Darktrace", "Defender Cloud"] },
    
    },
  },
  "1-5": {
    head: "Duration + Social",
    levels: {
             1: { Software: ["ClickUp AI", "Notion AI"] },
      2: { Languages: ["JavaScript", "REST", "Cloud APIs"] },
      3: { Hardware: ["Cloud Workspace", "Private Company Server"] },
      4: { Protocols: ["REST API", "WebSocket", "Cloud Sync"] },
      5: { Filters: ["Real-time", "Collaboration", "Cloud-native"] },
      6: { Cloud: ["AWS", "GCP", "Cloud Workspace"] },
      7: { Security: ["Zscaler", "Cisco Umbrella"] },
 
    },
  },
  "2-0": {
    head: "Combined Tool",
    levels: {
         1: { Software: ["NASA TAT-C + OpenMDAO", "SEER SEM", "ANSYS ModelCenter"] },
      2: { Languages: ["Python", "C++", ".NET", "MATLAB"] },
      3: { Hardware: ["HPC Workstation", "Simulation Servers", "Enterprise PC"] },
      4: { Protocols: ["Python", "C++", ".NET", "MATLAB"] },
      5: { Filters: ["Accuracy", "Completeness", "Efficiency"] },
      6: { Cloud: ["AWS", "Azure", "GCP"] },
      7: { Security: ["CrowdStrike", "Splunk"] },
     
    },
  },
  "2-1": {
    head: "Combined Assessment",
    levels: {    1: { Software: ["Siemens TeamCenter + Simcenter", "Ansys ModelCenter", "IBM ELM"] },
      2: { Languages: ["C++", "Python", "Java", "Eclipse RCP"] },
      3: { Hardware: ["Standard Workstation", "GPU Workstation"] },
      4: { Protocols: ["C++", "Python", "Java", "Eclipse RCP"] },
      5: { Filters: ["Completeness", "Integration", "Accuracy"] },
      6: { Cloud: ["AWS", "Azure", "GCP"] },
      7: { Security: ["Splunk", "QRadar", "ELK"] },
  
    },
  },
  "2-2": {
    head: "Standalone Combined",
    levels: {   1: { Software: ["ESA TRL Calc + COCOMO Estimation"] },
      2: { Languages: ["Python", "Java", "MATLAB", "SQL DB"] },
      3: { Hardware: ["Standard PC"] },
      4: { Protocols: ["Python", "Java", "MATLAB", "SQL DB"] },
      5: { Filters: ["Budget", "Simplicity", "Portability"] },
      6: { Cloud: ["GCP", "AWS"] },
      7: { Security: ["BitLocker", "Local DB encrypt"] },
   
    },
  },
  "2-3": {
    head: "Combined + ERP",
    levels: {    1: { Software: ["Siemens Teamcenter + SAP ERP", "Oracle Primavera + ERP", "SAP PPM"] },
      2: { Languages: ["Java", "C++", ".NET", "Oracle DB", "ABAP"] },
      3: { Hardware: ["Enterprise Servers", "Private Data Center", "Cloud"] },
      4: { Protocols: ["Java", "C++", ".NET", "Oracle DB", "ABAP"] },
      5: { Filters: ["Scalability", "Security", "Integration"] },
      6: { Cloud: ["Azure", "SAP Cloud", "Oracle Cloud"] },
      7: { Security: ["SAP Security", "Oracle Vault", "IBM Maximo"] },
  
    },
  },
  "2-4": {
    head: "Combined + AI/ML",
    levels: {
     1: { Software: ["IBM ELM", "Siemens + Predictive Analytics", "NASA OpenMBEE"] },
      2: { Languages: ["Java", "C++", "JavaScript", "Python"] },
      3: { Hardware: ["Industrial Servers", "HPC Cluster", "Research Workstation"] }, 
      4: { Protocols: ["Java", "C++", "JavaScript", "Python", "ML APIs"] },
      5: { Filters: ["Automation", "Intelligence", "Predictive"] },
      6: { Cloud: ["AWS", "GCP", "Azure"] },
      7: { Security: ["Darktrace", "Defender Cloud", "IBM QRadar"] },
     
    },
  },
  "2-5": {
    head: "Combined + Social",
    levels: { 1: { Software: ["IBM ELM", "Siemens + Predictive Analytics", "Oracle Primavera + AI Risk"] },
      2: { Languages: ["Python", "C++", "Java", "PL/SQL"] },
      3: { Hardware: ["Enterprise Workstation", "Industrial Server", "Cloud Server"] },
      4: { Protocols: ["Python", "C++", "Java", "PL/SQL"] },
      5: { Filters: ["Real-time", "Collaboration", "Integration"] },
      6: { Cloud: ["AWS", "GCP", "Azure"] },
      7: { Security: ["Zscaler", "Cisco Umbrella", "IBM QRadar"] },
     
    },
  },
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const palette = {
  blue:   { bg: "#E6F1FB", dark: "#0C447C", mid: "#378ADD", light: "#B5D4F4" },
  green:  { bg: "#EAF3DE", dark: "#27500A", mid: "#639922", light: "#C0DD97" },
  purple: { bg: "#EEEDFE", dark: "#3C3489", mid: "#7F77DD", light: "#CECBF6" },
  teal:   { bg: "#E1F5EE", dark: "#085041", mid: "#1D9E75", light: "#9FE1CB" },
  coral:  { bg: "#FAECE7", dark: "#993C1D", mid: "#D85A30", light: "#F5C4B3" },
  amber:  { bg: "#FAEEDA", dark: "#854F0B", mid: "#BA7517", light: "#FAC775" },
  gray:   { bg: "#F1EFE8", dark: "#444441", mid: "#888780", light: "#D3D1C7" },
};

function chipStyle(colorKey) {
  const c = palette[colorKey] || palette.gray;
  return {
    background: c.bg,
    color: c.dark,
    border: `0.5px solid ${c.light}`,
    borderRadius: 5,
    fontSize: 9,
    fontWeight: 600,
    padding: "2px 6px",
    display: "inline-block",
    lineHeight: 1.5,
    whiteSpace: "nowrap",
  };
}

function accentColor(key) {
  return palette[key]?.mid || "#888";
}

// ─── Sidebar Button ──────────────────────────────────────────────────────────

function LvlBtn({ lvl, active, onClick }) {
  const c = palette.purple;
  return (
    <button
      onClick={onClick}
      style={{
        width: 44,
        height: 44,
        borderRadius: 9,
        border: active ? `1.5px solid ${c.mid}` : "0.5px solid #d0cfc8",
        background: active ? c.bg : "#fff",
        cursor: "pointer",
        fontSize: 9,
        fontWeight: 700,
        color: active ? c.dark : "#888",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        transition: "all .15s",
        lineHeight: 1,
      }}
    >
      <span style={{ fontSize: 11 }}>L{lvl}</span>
      <span style={{ fontSize: 8, opacity: 0.7, fontWeight: 400 }}>
        {LEVEL_NAMES[lvl].split("—")[1]?.trim().slice(0, 5)}
      </span>
    </button>
  );
}

// ─── Matrix Card ─────────────────────────────────────────────────────────────

function Sample({ cellKey, cell, globalLevel, accent, onClick }) {
  const [hover, setHover] = useState(false);
  const lvlData = cell.levels[globalLevel] || {};
  const items = Object.values(lvlData).flat().slice(0, 3);
  const chipColor = CHIP_COLORS[globalLevel];
  const ac = accentColor(accent);

  return (
    <div
      onClick={() => onClick(cellKey, cell, accent)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 9,
        border: hover ? `1px solid ${ac}` : "0.5px solid #dddbd4",
        background: "#fff",
        padding: "8px 9px 18px",
        cursor: "pointer",
        position: "relative",
        minHeight: 76,
        overflow: "hidden",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "all .15s",
        boxSizing: "border-box",
      }}
    >
      {/* top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          borderRadius: "9px 9px 0 0",
          background: ac,
        }}
      />
      <div style={{ fontSize: 9, fontWeight: 600, color: "#888", marginBottom: 5, lineHeight: 1.2 }}>
        {cell.head}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item, i) => (
          <span key={i} style={chipStyle(chipColor)}>{item}</span>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 4, right: 6,
          fontSize: 8,
          color: "#aaa",
          fontWeight: 500,
        }}
      >
        L{globalLevel}
      </div>
    </div>
  );
}

// ─── Drill-down Modal ────────────────────────────────────────────────────────

function Modal({ open, onClose, cell, accent, initialLevel }) {
  const [activeLevel, setActiveLevel] = useState(initialLevel);
  const orderedLevels = [1,2,3,4,5,6,7];

  // Sync active tab when modal opens
  React.useEffect(() => {
    setActiveLevel(initialLevel);
  }, [initialLevel, open]);

  if (!cell) return null;
  const ac = accentColor(accent);
  const lvlData = cell.levels[activeLevel] || {};
  const chipColor = CHIP_COLORS[activeLevel];

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.42)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity .18s",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          border: "0.5px solid #dddbd4",
          width: 500,
          maxWidth: "94vw",
          maxHeight: "88vh",
          overflowY: "auto",
          padding: 22,
          position: "relative",
          transform: open ? "scale(1) translateY(0)" : "scale(.94) translateY(10px)",
          transition: "transform .18s",
        }}
      >
        {/* close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 14, right: 14,
            width: 26, height: 26, borderRadius: 7,
            border: "0.5px solid #dddbd4", background: "#f5f4f0",
            cursor: "pointer", fontSize: 13, color: "#666",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          ✕
        </button>

        {/* accent stripe */}
        <div style={{ height: 3, borderRadius: 3, background: ac, marginBottom: 14 }} />
        <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a18", marginBottom: 3 }}>
          {cell.head}
        </div>
        <div style={{ fontSize: 11, color: "#888", marginBottom: 14 }}>
          Click tabs below to drill through depth layers
        </div>

        {/* tabs */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          {orderedLevels.map((lvl) => {
            const isActive = lvl === activeLevel;
            return (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                style={{
                  fontSize: 10,
                  padding: "4px 10px",
                  borderRadius: 7,
                  border: isActive ? `1.5px solid ${palette.purple.mid}` : "0.5px solid #dddbd4",
                  background: isActive ? palette.purple.bg : "#f5f4f0",
                  color: isActive ? palette.purple.dark : "#666",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all .12s",
                }}
              >
                {LEVEL_NAMES[lvl]}
              </button>
            );
          })}
        </div>

        {/* panel */}
        {Object.entries(lvlData).map(([sectionName, items]) => (
          <div key={sectionName} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#aaa", marginBottom: 7, textTransform: "uppercase", letterSpacing: ".05em" }}>
              {sectionName}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {items.map((item, i) => (
                <span key={i} style={{ ...chipStyle(chipColor), fontSize: 12, padding: "4px 10px" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div style={{ fontSize: 10, color: "#bbb", marginTop: 6 }}>
          Click tabs to drill through levels ↓
        </div>
      </div>
    </div>
  );
}

// ─── Main Dashboard ──────────────────────────────────────────────────────────

export default function TRLMatrixDashboard() {
  const [globalLevel, setGlobalLevel] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCell, setModalCell] = useState(null);
  const [modalAccent, setModalAccent] = useState("blue");

  const sidebarLevels = [1,2,3,4,5,6,7]

  const colHeaders = [
    { label: "Tool",       color: "blue"   },
    { label: "Assessment", color: "blue"   },
    { label: "Standalone", color: "blue"   },
    { label: "+ ERP",      color: "teal"   },
    { label: "+ AI/ML",    color: "purple" },
    { label: "+ Social",   color: "coral"  },
  ];

  function handleCardClick(key, cell, accent) {
    setModalCell(cell);
    setModalAccent(accent);
    setModalOpen(true);
  }

  return (
    <><Header/>
    <div style={{ display: "flex", minHeight: 600, fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#fafaf8" }}>
      {/* ── Sidebar ── */}
      <div
        style={{
          width: 64,
          flexShrink: 0,
          background: "#f5f4f0",
          borderRight: "0.5px solid #dddbd4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "14px 0",
          gap: 6,
        }}
      >
        <div
          style={{
            fontSize: 8,
            color: "#aaa",
            textTransform: "uppercase",
            letterSpacing: ".06em",
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            marginBottom: 10,
          }}
        >
          Levels
        </div>
        {sidebarLevels.map((lvl) => (
          <LvlBtn
            key={lvl}
            lvl={lvl}
            active={globalLevel === lvl}
            onClick={() => setGlobalLevel(lvl)}
          />
        ))}
      </div>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar */}
        <div
          style={{
            padding: "10px 16px 9px",
            borderBottom: "0.5px solid #dddbd4",
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#fff",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a18" }}>
              TRL &amp; Duration Estimation Matrix
            </div>
            <div style={{ fontSize: 11, color: "#888", display: "flex", gap: 4 }}>
              <span>Ground Level</span>
              <span style={{ opacity: .4 }}>›</span>
              <span style={{ color: palette.purple.mid }}>{LEVEL_NAMES[globalLevel]}</span>
            </div>
          </div>
          {/* Legend */}
          <div style={{ display: "flex", gap: 10 }}>
            {[["blue","TRL"],["green","Duration"],["purple","Combined"]].map(([c,label]) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#888" }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: palette[c].mid }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix */}
        <div style={{ flex: 1, padding: 12, overflowY: "auto" }}>
          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "80px repeat(6, 1fr)", gap: 5, marginBottom: 5 }}>
            <div />
            {colHeaders.map(({ label, color }, ci) => (
              <div
                key={ci}
                style={{
                  textAlign: "center",
                  fontSize: 9,
                  fontWeight: 700,
                  color: palette[color].dark,
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                  padding: "3px 2px",
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Rows */}
          {ROWS.map((row, ri) => (
            <div key={ri} style={{ display: "grid", gridTemplateColumns: "80px repeat(6, 1fr)", gap: 5, marginBottom: 5 }}>
              {/* Row label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontSize: 9,
                  fontWeight: 700,
                  color: palette[ROW_COLORS[ri]].mid,
                  textTransform: "uppercase",
                  letterSpacing: ".04em",
                  paddingRight: 7,
                  lineHeight: 1.3,
                }}
              >
                {row}
              </div>
              {COLS.map((col, ci) => {
                const key = `${ri}-${ci}`;
                const cell = CELLS[key];
                const accent = ci >= 3 ? COL_COLORS[ci] : ROW_COLORS[ri];
                return (
                  <Sample
                    key={ci}
                    cellKey={key}
                    cell={cell}
                    globalLevel={globalLevel}
                    accent={accent}
                    onClick={handleCardClick}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        cell={modalCell}
        accent={modalAccent}
        initialLevel={globalLevel}
      />
    </div></>
  );
}
