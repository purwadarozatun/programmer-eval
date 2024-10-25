<script>
import VueMarkdown from 'vue-markdown-render'
import Swal from 'sweetalert2'
const pertanyaan = [
  {
    pertanyaan: 'Apa perbedaan antara `git pull` dan `git fetch`?',
    jawaban: [
      {
        text: '`git fetch` mengambil perubahan dan langsung menerapkannya, sedangkan `git pull` hanya mengambil perubahan.',
        score: 1,
      },
      {
        text: '`git fetch` hanya mengambil perubahan tanpa menerapkannya, sedangkan `git pull` mengambil perubahan dan langsung menerapkannya.',
        score: 3,
      },
      {
        text: '`git pull` menghapus riwayat commit sebelumnya, sedangkan `git fetch` menggabungkan commit.',
        score: 1,
      },
      {
        text: 'Tidak ada perbedaan antara keduanya.',
        score: 0,
      },
    ],
  },
  {
    pertanyaan:
      'Bagaimana cara membuat dan memeriksa cabang (branch) baru di Git?',
    jawaban: [
      {
        text: '`git branch checkout [nama_cabang]`',
        score: 0,
      },
      {
        text: '`git checkout -b [nama_cabang]`',
        score: 3,
      },
      {
        text: '`git branch create [nama_cabang]`',
        score: 1,
      },
      {
        text: '`git init branch [nama_cabang]`',
        score: 0,
      },
    ],
  },
  {
    pertanyaan:
      'Bagaimana cara membatalkan commit terakhir tanpa kehilangan perubahan?',
    jawaban: [
      {
        text: '`git reset --hard`',
        score: 0,
      },
      {
        text: '`git revert --soft`',
        score: 1,
      },
      {
        text: '`git reset --soft HEAD~1`',
        score: 3,
      },
      {
        text: '`git checkout --amend`',
        score: 1,
      },
    ],
  },
  {
    pertanyaan: 'Apa perintah yang digunakan untuk melihat riwayat commit?',
    jawaban: [
      {
        text: '`git log`',
        score: 3,
      },
      {
        text: '`git status`',
        score: 0,
      },
      {
        text: '`git show`',
        score: 1,
      },
      {
        text: '`git history`',
        score: 0,
      },
    ],
  },
  {
    pertanyaan:
      'Bagaimana cara menyelesaikan konflik saat melakukan merge dua cabang?',
    jawaban: [
      {
        text: '`git reset --hard`',
        score: 0,
      },
      {
        text: 'Edit file yang konflik, selesaikan masalah, lalu lakukan commit.',
        score: 3,
      },
      {
        text: '`git merge --conflict`',
        score: 1,
      },
      {
        text: 'Gunakan perintah `git conflict resolve`.',
        score: 0,
      },
    ],
  },
  {
    pertanyaan: 'Jelaskan perbedaan antara `git merge` dan `git rebase`.',
    jawaban: [
      {
        text: '`git merge` menggabungkan cabang dengan riwayat yang tidak berubah, sedangkan `git rebase` membuat riwayat commit tampak bersih dan linear.',
        score: 3,
      },
      {
        text: '`git rebase` dan `git merge` sama-sama menggabungkan cabang, tapi `git rebase` otomatis menghapus commit.',
        score: 1,
      },
      {
        text: '`git merge` menghapus riwayat, sedangkan `git rebase` menggandakan commit.',
        score: 0,
      },
      {
        text: '`git rebase` hanya digunakan untuk menggabungkan remote repository.',
        score: 0,
      },
    ],
  },
  {
    pertanyaan: 'Apa fungsi `git stash`?',
    jawaban: [
      {
        text: 'Menyimpan perubahan sementara yang belum siap untuk di-commit.',
        score: 3,
      },
      {
        text: 'Mengembalikan repository ke commit sebelumnya.',
        score: 0,
      },
      {
        text: 'Menyimpan commit ke server.',
        score: 0,
      },
      {
        text: 'Menghapus commit terakhir.',
        score: 0,
      },
    ],
  },
  {
    pertanyaan: 'Kapan sebaiknya menggunakan `git cherry-pick`?',
    jawaban: [
      {
        text: 'Ketika ingin memilih commit tertentu untuk diterapkan ke cabang lain.',
        score: 3,
      },
      {
        text: 'Ketika ingin menggabungkan seluruh riwayat commit dari cabang lain.',
        score: 1,
      },
      {
        text: 'Ketika ingin menghapus commit terakhir.',
        score: 0,
      },
      {
        text: 'Ketika ingin memeriksa perubahan di commit sebelumnya.',
        score: 0,
      },
    ],
  },
  {
    pertanyaan: 'Bagaimana cara mengelola submodul di Git?',
    jawaban: [
      {
        text: '`git submodule add [repository_url]` untuk menambahkan submodul baru.',
        score: 3,
      },
      {
        text: '`git init submodule [repository_url]` untuk memulai submodul.',
        score: 1,
      },
      {
        text: '`git fetch --submodule` untuk mengambil perubahan dari submodul.',
        score: 0,
      },
      {
        text: 'Tidak ada perintah untuk mengelola submodul di Git.',
        score: 0,
      },
    ],
  },
  {
    pertanyaan: 'Apa langkah-langkah untuk menggunakan `git bisect`?',
    jawaban: [
      {
        text: 'Menandai commit baik dan buruk, kemudian Git mencari commit yang menyebabkan bug.',
        score: 3,
      },
      {
        text: 'Menghapus commit yang salah secara langsung.',
        score: 0,
      },
      {
        text: 'Menggabungkan commit dari dua cabang.',
        score: 1,
      },
      {
        text: 'Menyimpan commit di riwayat terpisah.',
        score: 0,
      },
    ],
  },
  {
    pertanyaan:
      'Bagaimana cara memaksa push ke cabang tanpa menghapus riwayat commit yang sudah ada?',
    jawaban: [
      {
        text: '`git push --force-with-lease`',
        score: 3,
      },
      {
        text: '`git push --overwrite`',
        score: 1,
      },
      {
        text: '`git push --force-delete`',
        score: 0,
      },
      {
        text: '`git push -f --delete`',
        score: 0,
      },
    ],
  },
  {
    pertanyaan: 'Apa yang dimaksud dengan `git reflog` dan apa fungsinya?',
    jawaban: [
      {
        text: 'Menampilkan log dari semua referensi, termasuk yang tidak terlihat oleh `git log`.',
        score: 3,
      },
      {
        text: 'Menampilkan perubahan di branch master.',
        score: 0,
      },
      {
        text: 'Menghapus commit terakhir dari riwayat.',
        score: 1,
      },
      {
        text: 'Menyimpan perubahan sementara sebelum commit.',
        score: 0,
      },
    ],
  },
]

export default {
  name: 'QuizView',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      pertanyaan,
      currentQuestion: -99,
      score: 0,
      showResult: false,
      nama: '',
      currentAnswer: '',
      level: '',
    }
  },
  methods: {
    nextQuestion(score) {
      this.score += score
      this.currentQuestion++
      if (this.currentQuestion === this.pertanyaan.length) {
        this.showResult = true
      }
    },
    startQuiz() {
      if (this.nama === '' || this.nama === null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nama tidak boleh kosong',
        })
        return
      }
      this.currentQuestion = 0
    },
  },
  watch: {
    score(newScore) {
      if (newScore >= 25 || newScore === 30) {
        this.level = 'SENIOR'
      } else if (newScore >= 13 || newScore === 24) {
        this.level = 'MIDDLE'
      } else {
        this.level = 'JUNIOR'
      }
    },
  },
}
</script>

<template>
  <div class="flex align-middle h-screen justify-center">
    <div
      class="flex flex-col h-full justify-center items-center md:w-[60%] p-3"
    >
      <h1 class="text-3xl font-bold px-2 py-5">
        Level di git kamu seperti apa ?
      </h1>

      <div
        v-if="!showResult && currentQuestion == -99"
        class="flex flex-col w-full px-2"
      >
        <div class="text-xl">Nama :</div>
        <div class="flex flex-row w-full">
          <div
            class="border-2 border-r-0 border-blue-300 grow rounded-xl rounded-r-none mt-2"
          >
            <input
              v-model="nama"
              type="text"
              class="border-b-2 p-3 w-full rounded-xl rounded-r-none"
            />
          </div>
          <button
            @click="startQuiz"
            class="border-l-0 rounded-l-none py-2 px-4 bg-blue-400 mt-2 text-white rounded-md"
          >
            Lanjutkan
          </button>
        </div>
      </div>
      <div
        v-if="!showResult && currentQuestion >= 0"
        class="px-4 pt-auto py-5 bg-blue-200 rounded-sm my-4"
      >
        <div class="text-2xl pb-4">
          {{ pertanyaan[currentQuestion].pertanyaan }}
        </div>

        <div>
          <div
            v-for="(jawaban, index) in pertanyaan[currentQuestion].jawaban"
            :key="index"
            @click="nextQuestion(jawaban.score)"
            class="cursor-pointer w-full bg-gray-200 p-3 my-2 rounded-md hover:bg-blue-400 hover:text-white"
          >
            <vue-markdown :source="jawaban.text" :plugins="plugins" />
          </div>
        </div>
      </div>

      <div
        v-if="showResult"
        class="px-4 pt-auto py-5 bg-blue-200 rounded-sm m-4"
      >
        <div class="w-full flex flex-col gap-5 md:w-[600px]">
          <img
            v-if="level == 'SENIOR'"
            src="@/assets/SENIOR.webp"
            alt="Level Programmer"
          />
          <img
            v-if="level == 'MIDDLE'"
            src="@/assets/MIDDLE.webp"
            alt="Level Programmer"
          />
          <img
            v-if="level == 'JUNIOR'"
            src="@/assets/JUNIOR.webp"
            alt="Level Programmer"
          />

          <div class="text-2xl">
            <div class="flex justify-between">
              Nama : <span class="font-bold">{{ nama }}</span>
            </div>
            <div class="flex justify-between">
              Level : <span class="font-bold">{{ level }}</span>
            </div>
            <div class="flex justify-between">
              Score : <span class="font-bold">{{ score }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
