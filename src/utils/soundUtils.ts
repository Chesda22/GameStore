export const playDoorSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Create a simple door sound effect using oscillators
  const oscillator1 = audioContext.createOscillator();
  const oscillator2 = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  // Connect oscillators to gain node
  oscillator1.connect(gainNode);
  oscillator2.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Set frequencies for a wooden door creak sound
  oscillator1.frequency.setValueAtTime(150, audioContext.currentTime);
  oscillator2.frequency.setValueAtTime(180, audioContext.currentTime);
  
  // Create the door creak effect with frequency modulation
  oscillator1.frequency.exponentialRampToValueAtTime(120, audioContext.currentTime + 0.3);
  oscillator2.frequency.exponentialRampToValueAtTime(140, audioContext.currentTime + 0.3);
  
  // Set volume envelope (quick attack, slow decay)
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
  
  // Start and stop the sound
  oscillator1.start(audioContext.currentTime);
  oscillator2.start(audioContext.currentTime);
  
  oscillator1.stop(audioContext.currentTime + 0.8);
  oscillator2.stop(audioContext.currentTime + 0.8);
};
