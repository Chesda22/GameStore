import React from 'react';

export const ClosedDoor: React.FC = () => (
  <svg width="120" height="160" viewBox="0 0 120 160" style={{ imageRendering: 'pixelated' }}>
    {/* Stone archway background */}
    <rect x="0" y="40" width="120" height="120" fill="#a0a0a0" stroke="#4a9eff" strokeWidth="2"/>
    
    {/* Stone blocks pattern */}
    <rect x="10" y="50" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="50" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="50" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="50" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="70" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="70" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="70" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="70" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="90" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="90" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="90" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="90" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="110" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="110" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="110" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="110" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="130" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="130" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="130" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="130" width="20" height="15" fill="#b0b0b0"/>
    
    {/* Closed door */}
    <rect x="30" y="60" width="60" height="100" fill="#8B4513"/>
    
    {/* Door planks */}
    <rect x="32" y="62" width="56" height="8" fill="#A0522D"/>
    <rect x="32" y="72" width="56" height="8" fill="#8B4513"/>
    <rect x="32" y="82" width="56" height="8" fill="#A0522D"/>
    <rect x="32" y="92" width="56" height="8" fill="#8B4513"/>
    <rect x="32" y="102" width="56" height="8" fill="#A0522D"/>
    <rect x="32" y="112" width="56" height="8" fill="#8B4513"/>
    <rect x="32" y="122" width="56" height="8" fill="#A0522D"/>
    <rect x="32" y="132" width="56" height="8" fill="#8B4513"/>
    <rect x="32" y="142" width="56" height="8" fill="#A0522D"/>
    <rect x="32" y="152" width="56" height="8" fill="#8B4513"/>
    
    {/* Horizontal beams */}
    <rect x="32" y="90" width="56" height="4" fill="#654321"/>
    <rect x="32" y="130" width="56" height="4" fill="#654321"/>
    
    {/* Rivets on beams */}
    <rect x="45" y="91" width="3" height="2" fill="#c0c0c0"/>
    <rect x="70" y="91" width="3" height="2" fill="#c0c0c0"/>
    <rect x="45" y="131" width="3" height="2" fill="#c0c0c0"/>
    <rect x="70" y="131" width="3" height="2" fill="#c0c0c0"/>
    
    {/* Door handle */}
    <rect x="80" y="120" width="8" height="12" fill="#666666"/>
  </svg>
);

export const OpenDoor: React.FC = () => (
  <svg width="120" height="160" viewBox="0 0 120 160" style={{ imageRendering: 'pixelated' }}>
    {/* Stone archway background */}
    <rect x="0" y="40" width="120" height="120" fill="#a0a0a0" stroke="#4a9eff" strokeWidth="2"/>
    
    {/* Stone blocks pattern */}
    <rect x="10" y="50" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="50" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="50" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="50" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="70" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="70" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="70" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="70" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="90" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="90" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="90" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="90" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="110" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="110" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="110" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="110" width="20" height="15" fill="#b0b0b0"/>
    
    <rect x="10" y="130" width="20" height="15" fill="#b0b0b0"/>
    <rect x="35" y="130" width="20" height="15" fill="#b0b0b0"/>
    <rect x="60" y="130" width="20" height="15" fill="#b0b0b0"/>
    <rect x="85" y="130" width="20" height="15" fill="#b0b0b0"/>
    
    {/* Dark void where door panel was (no door panel = open) */}
    <rect x="30" y="60" width="60" height="100" fill="#000000" opacity="0.9"/>
    
    {/* Door frame/hinge area */}
    <rect x="28" y="60" width="4" height="100" fill="#654321"/>
  </svg>
);

export const ClosedChest: React.FC = () => (
  <svg width="120" height="160" viewBox="0 0 120 160" style={{ imageRendering: 'pixelated' }}>
    {/* Chest base */}
    <rect x="20" y="80" width="80" height="30" fill="#8B4513"/>
    
    {/* Chest planks */}
    <rect x="22" y="82" width="76" height="6" fill="#A0522D"/>
    <rect x="22" y="90" width="76" height="6" fill="#8B4513"/>
    <rect x="22" y="98" width="76" height="6" fill="#A0522D"/>
    <rect x="22" y="106" width="76" height="6" fill="#8B4513"/>
    
    {/* Chest lid (closed) */}
    <rect x="25" y="60" width="70" height="25" fill="#8B4513"/>
    
    {/* Lid planks */}
    <rect x="27" y="62" width="66" height="6" fill="#A0522D"/>
    <rect x="27" y="70" width="66" height="6" fill="#8B4513"/>
    <rect x="27" y="78" width="66" height="6" fill="#A0522D"/>
    
    {/* Chest bands */}
    <rect x="25" y="72" width="70" height="4" fill="#654321"/>
    <rect x="25" y="90" width="70" height="4" fill="#654321"/>
    
    {/* Chest rivets */}
    <rect x="35" y="73" width="3" height="2" fill="#c0c0c0"/>
    <rect x="60" y="73" width="3" height="2" fill="#c0c0c0"/>
    <rect x="85" y="73" width="3" height="2" fill="#c0c0c0"/>
    <rect x="35" y="91" width="3" height="2" fill="#c0c0c0"/>
    <rect x="60" y="91" width="3" height="2" fill="#c0c0c0"/>
    <rect x="85" y="91" width="3" height="2" fill="#c0c0c0"/>
    
    {/* Chest lock */}
    <rect x="55" y="85" width="10" height="8" fill="#654321"/>
    <rect x="57" y="87" width="6" height="4" fill="#ffd700"/>
  </svg>
);

export const OpenChest: React.FC = () => (
  <svg width="120" height="160" viewBox="0 0 120 160" style={{ imageRendering: 'pixelated' }}>
    {/* Chest base */}
    <rect x="20" y="80" width="80" height="30" fill="#8B4513"/>
    
    {/* Chest planks */}
    <rect x="22" y="82" width="76" height="6" fill="#A0522D"/>
    <rect x="22" y="90" width="76" height="6" fill="#8B4513"/>
    <rect x="22" y="98" width="76" height="6" fill="#A0522D"/>
    <rect x="22" y="106" width="76" height="6" fill="#8B4513"/>
    
    {/* Chest lid (open) - same position as closed but shorter */}
    <rect x="25" y="55" width="70" height="15" fill="#8B4513"/>
    
    {/* Lid planks */}
    <rect x="27" y="57" width="66" height="6" fill="#A0522D"/>
    <rect x="27" y="65" width="66" height="6" fill="#8B4513"/>
    
    {/* Chest bands */}
    <rect x="25" y="90" width="70" height="4" fill="#654321"/>
    
    {/* Chest rivets */}
    <rect x="35" y="91" width="3" height="2" fill="#c0c0c0"/>
    <rect x="60" y="91" width="3" height="2" fill="#c0c0c0"/>
    <rect x="85" y="91" width="3" height="2" fill="#c0c0c0"/>
    
    {/* Chest lock (on lid when open) */}
    <rect x="55" y="65" width="10" height="8" fill="#654321"/>
    <rect x="57" y="67" width="6" height="4" fill="#ffd700"/>
    
    {/* Chest interior (dark) */}
    <rect x="25" y="70" width="70" height="10" fill="#000000" opacity="0.8"/>
  </svg>
);
