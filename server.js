const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const schedule = require("node-schedule");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public")); // Folder untuk file frontend

// Notifikasi bel ke semua klien
function ringBell() {
    console.log("🔔 Bel berbunyi!");
    io.emit("ring"); // Kirim sinyal ke semua klien
}

// Jadwal bel otomatis (sesuaikan jamnya)
schedule.scheduleJob("55 7 * * *", ringBell); // 07:55
schedule.scheduleJob("00 8 * * *", ringBell); // 08:00
schedule.scheduleJob("00 12 * * *", ringBell); // 12:00
schedule.scheduleJob("55 12 * * *", ringBell); // 12:55
schedule.scheduleJob("00 13 * * *", ringBell); // 13:00
schedule.scheduleJob("55 16 * * *", ringBell); // 16:55
schedule.scheduleJob("14 18 * * *", ringBell); // 17:27

// Jalankan server
server.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
