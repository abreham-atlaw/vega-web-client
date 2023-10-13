<!-- <template>
    <div class="">




      <button @click="prev">Prev</button>
      <button @click="play">Play</button>
      <button @click="pause">Pause</button>
      <button @click="next">Next</button>
      <input type="range" min="0" :max="duration" v-model="currentTime">
    </div>
</template>
  
<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
    name: "SongPlayerComponent",
    props: {
      // url: String,
      songs: Array
    },
    setup(props) {
      const audioRef = ref(null)
      const currentTime = ref(0)
      const duration = ref(0)
      let currentSongIndex = ref(0)
  
      const play = () => {
        audioRef.value.play()
      }
  
      const pause = () => {
        audioRef.value.pause()
      }
  
      const next = () => {
        currentSongIndex.value++
        if (currentSongIndex.value >= props.songs.length) currentSongIndex.value = 0
        audioRef.value.src = props.songs[currentSongIndex.value]
        play()
      }
  
      const prev = () => {
        currentSongIndex.value--
        if (currentSongIndex.value < 0) currentSongIndex.value = props.songs.length - 1
        audioRef.value.src = props.songs[currentSongIndex.value]
        play()
      }
  
      const updateTime = (e) => {
        currentTime.value = e.target.currentTime
        duration.value = e.target.duration
      }
  
      onMounted(() => {
        audioRef.value.src = props.songs[currentSongIndex.value]
      })
  
      return { audioRef, currentTime, duration, play, pause, next, prev, updateTime }
    }
}
</script>

<style scoped>
</style> -->
