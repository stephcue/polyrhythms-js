class Track {
    constructor(center, radius, hue) {
        this.center = center;
        this.radius = radius;
        this.hue = hue;
        this.period = Math.PI;
    }

    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y - Math.abs(Math.sin(offset)) * this.radius,
            round: Math.floor(offset / this.period),
            progress: (offset % this.period) / this.period
        };
    }

    draw(context) {
        context.beginPath();
        for (let a = 0; a < Math.PI * 2; a += 0.1) {
            const pos = this.getPosition(a);
            context.lineTo(
                pos.x, pos.y
            );
        }
        context.closePath();
        context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        context.stroke();
    }
}