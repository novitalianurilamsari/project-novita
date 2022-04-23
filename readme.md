ID			: KM_G2FE3045
NAMA		: NOVITA LIA NURILAM SARI
Nama project	:spotify premium
Deskripsi aplikasi	:
Menyelesaikan sebuah maslah yang dihadapi oleh gigih yang suka mendengarkan musik.
Problem Statement
Gigih adalah seorang anak muda yang menyukai musik. Hampir setiap hari dia mendengarkan musik di Spotify dari berbagai genre. Dia ingin membuat playlist (daftar putar) yang berisikan lagu lagu yang sedang ia gandrungi. Bantulah Gigih dengan membuat sebuah aplikasi berbasis web sehingga Gigih dapat membuat playlist dengan mudah.

Di aplikasi tersebut, Gigih ingin agar aplikasi tersebut hanya dapat diakses oleh orang yang sudah log-in terlebih dahulu. Jika Gigih belum log-in, maka Gigih tidak dapat mengakses halaman untuk membuat playlist tersebut, dan akan di-redirect ke halaman login.

Ketika selesai login, maka Gigih ingin melihat halaman untuk membuat playlist. Pertama tama, ia ingin agar dia bisa mencari lagu kesukaannya. Ia ingin agar informasi tentang foto album, judul lagu, nama penyanyi, dan durasi lagu muncul di hasil pencariannya. Ia juga ingin memilih lagu yang nantinya ingin dia jadikan playlist. Ketika ia mencari dengan kata kunci yang lain dan menemukan lagu yang sudah pernah ia pilih, ia tidak ingin lagu tersebut bisa dia pilih lebih dari satu kali. Ia juga ingin dapat membuang pilihan lagu yang sebelumnya dia pilih.

Jika sudah selesai memilih lagu, Gigih ingin agar ia bisa membuat playlist dari pilihan lagu yang sudah dia pilih sebelumnya. Gigih juga ingin selalu menuliskan judul dan deskripsi dari playlist tersebut. Untuk judul, ia ingin agar judul dari semua playlist yang dia buat menggunakan aplikasi ini, memiliki panjang minimal 10 karakter. Ia juga ingin agar playlist yang dibuat selalu merupakan private playlist dan bukan merupakan collaborative playlist.

Ketika playlist sudah berhasil dibuat, Gigih ingin mengetahui bahwa playlist tersebut sudah berhasil dibuat.

Fitur dan implementasi:
Technical Requirements
1.	Hooks: terdapat minimum satu React component yang menggunakan hooks
2.	Flex & Grid: terdapat masing - masing minimum satu penggunaan ﬂex dan grid pada aplikasi kamu.
3.	Typescript: terdapat minimum satu Typescript Type dan satu ﬁle Typescript yang aktif digunakan.
4.	Redux: terdapat minimum satu store. Store ini harus aktif digunakan pada aplikasi.
5.	Eslint: tidak terdapat satu pun warning eslint pada keseluruhan kode kamu.
6.	Testing: terdapat minimal satu test case yang meliputi toBeInTheDocument() dan userEvent (mensimulasikan user interaction). Juga aplikasi kamu harus lolos test yang sudah kamu buat.

Fiturnya yaitu:
1.	Sebelum melakukan pencaharian diharuskan untuk login terselbih dahulu
 ![image](https://user-images.githubusercontent.com/101916815/164879486-e3e0fbef-0f50-40b8-abea-44410c7fd692.png)

2.	Sebelum membuat playlist diharuskan untuk mengisi pencaharian dulu,
 ![image](https://user-images.githubusercontent.com/101916815/164879492-5d9b339b-1c04-447e-b269-961d68f446c9.png)

3.	Setelah masuk bisa melakukan pencarian
4.	Bisa select dan deselect lagu
5.	Bisa membuat playlist
6.	Minimal 10 caharcter untuk title dan 20 untuk deskripsi
7.	Harus mengisi form dulu sebelum membuat playlist 

Cara install aplikasi:
Npm run start atau yarn start 
 

