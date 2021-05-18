-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Bulan Mei 2021 pada 15.52
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ppdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pendaftaran`
--

CREATE TABLE `pendaftaran` (
  `pendaftaran_id` int(11) NOT NULL,
  `nama_siswa` varchar(255) DEFAULT NULL,
  `jk_siswa` varchar(255) DEFAULT NULL,
  `tempat_lahir_siswa` varchar(255) DEFAULT NULL,
  `tanggal_lahir_siswa` varchar(255) DEFAULT NULL,
  `agama_siswa` varchar(255) DEFAULT NULL,
  `anak_ke` int(11) DEFAULT NULL,
  `nisn_siswa` varchar(255) DEFAULT NULL,
  `nik_siswa` varchar(255) DEFAULT NULL,
  `jalan` varchar(255) DEFAULT NULL,
  `rt` int(20) DEFAULT NULL,
  `rw` int(20) DEFAULT NULL,
  `no_rumah` int(20) DEFAULT NULL,
  `desa` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `kode_pos` int(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `asal_sekolah` varchar(255) DEFAULT NULL,
  `tahun_lulus` int(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `no_hp` varchar(255) DEFAULT NULL,
  `no_kk` varchar(255) DEFAULT NULL,
  `nik_ayah` varchar(255) DEFAULT NULL,
  `no_hp_ayah` varchar(255) DEFAULT NULL,
  `nama_ayah` varchar(255) DEFAULT NULL,
  `pekerjaan_ayah` varchar(255) DEFAULT NULL,
  `nik_ibu` varchar(255) DEFAULT NULL,
  `no_hp_ibu` varchar(255) DEFAULT NULL,
  `nama_ibu` varchar(255) DEFAULT NULL,
  `pekerjaan_ibu` varchar(255) DEFAULT NULL,
  `kode_program` int(20) DEFAULT NULL,
  `kode_bidang` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pendaftaran`
--

INSERT INTO `pendaftaran` (`pendaftaran_id`, `nama_siswa`, `jk_siswa`, `tempat_lahir_siswa`, `tanggal_lahir_siswa`, `agama_siswa`, `anak_ke`, `nisn_siswa`, `nik_siswa`, `jalan`, `rt`, `rw`, `no_rumah`, `desa`, `kecamatan`, `kota`, `kode_pos`, `alamat`, `asal_sekolah`, `tahun_lulus`, `email`, `no_hp`, `no_kk`, `nik_ayah`, `no_hp_ayah`, `nama_ayah`, `pekerjaan_ayah`, `nik_ibu`, `no_hp_ibu`, `nama_ibu`, `pekerjaan_ibu`, `kode_program`, `kode_bidang`) VALUES
(1, 'ijay', 'laki-laki', 'bogor', '2020-99-99', 'islam', 4, '798214', '6827647124', 'rcm', 2, 1, 25, 'rcmm', 'bogsel', 'boogorrr', 16139, 'rcmm bog', 'smpn 10', 2019, 'ni@gmail.com', '089923232', '381268214', '86284124', '82468124812', '26412641', 'pns', '2498124', '8126849124', 'ni', 'irt', 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_bidang`
--

CREATE TABLE `tb_bidang` (
  `kode_bidang` int(20) NOT NULL,
  `nama_bidang` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_bidang`
--

INSERT INTO `tb_bidang` (`kode_bidang`, `nama_bidang`) VALUES
(1, 'teknik informasi dan komunikasi'),
(2, 'bisnis manajemen'),
(3, 'pariwisata');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_program`
--

CREATE TABLE `tb_program` (
  `kode_program` int(20) NOT NULL,
  `nama_program` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_program`
--

INSERT INTO `tb_program` (`kode_program`, `nama_program`) VALUES
(1, 'reguler'),
(2, 'unggulan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT 2,
  `pendaftaran_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `role`, `pendaftaran_id`) VALUES
(1, 'ijayy', '123wikrama', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pendaftaran`
--
ALTER TABLE `pendaftaran`
  ADD PRIMARY KEY (`pendaftaran_id`),
  ADD KEY `FK_6664f51c-f41b-4bd8-89f9-5d3ecb65f04a` (`kode_program`),
  ADD KEY `FK_7ef5016e-d818-4eab-a2bf-8b653289a2e7` (`kode_bidang`);

--
-- Indeks untuk tabel `tb_bidang`
--
ALTER TABLE `tb_bidang`
  ADD PRIMARY KEY (`kode_bidang`);

--
-- Indeks untuk tabel `tb_program`
--
ALTER TABLE `tb_program`
  ADD PRIMARY KEY (`kode_program`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `FK_00474c49-9cc7-4bfb-aee7-e32829c1aa4e` (`pendaftaran_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pendaftaran`
--
ALTER TABLE `pendaftaran`
  MODIFY `pendaftaran_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pendaftaran`
--
ALTER TABLE `pendaftaran`
  ADD CONSTRAINT `FK_6664f51c-f41b-4bd8-89f9-5d3ecb65f04a` FOREIGN KEY (`kode_program`) REFERENCES `tb_program` (`kode_program`),
  ADD CONSTRAINT `FK_7ef5016e-d818-4eab-a2bf-8b653289a2e7` FOREIGN KEY (`kode_bidang`) REFERENCES `tb_bidang` (`kode_bidang`);

--
-- Ketidakleluasaan untuk tabel `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_00474c49-9cc7-4bfb-aee7-e32829c1aa4e` FOREIGN KEY (`pendaftaran_id`) REFERENCES `pendaftaran` (`pendaftaran_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
