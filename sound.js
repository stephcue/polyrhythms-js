const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency = 440, duration = 2) {
    const oscillator = audioContext.createOscillator();
    const envelope = audioContext.createGain();
    oscillator.connect(envelope);
    envelope.connect(audioContext.destination);

    envelope.gain.setValueAtTime(0, audioContext.currentTime);
    envelope.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.05);
    envelope.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}