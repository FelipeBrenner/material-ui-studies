import axios from "axios";

const idVideos =
  "qOer7KEMHIo" + // LUCAS INUTILISMO - Flow Podcast #212
  "%2C" +
  "yBwHwlM6PeA" + // ZOIO CANTA EMINEM E EMOCIONA A TODOS
  "%2C" +
  "mtcudot_Urs" + // DIOGO DEFANTE - Flow Podcast #184
  "%2C" +
  "EX4AyW4FI_4" + // POR ISSO QUE O WHINDERSSON NÃO FAZ COLLABS - SINUCASTIGO DA NOSTALGIA!!!
  "%2C" +
  "PImqHWNhLHc" + // Melhores momentos do Prior parte 1
  "%2C" +
  "oUuA_PGr1-Q" + // Dribles Mais Humilhantes de Neymar Jr
  "%2C" +
  "ve1_9okkuqA" + // TUDO PARECIA MAS NÃO ERA UM SONHO (FUNK REMIX) DJ LUCAS BEAT & ELIAS MONKBEL & CAIO COSTTA
  "%2C" +
  "mJnNCMrfCss"; // LUCAS - DJ LUCAS BEAT & CAMILLA E LUDMILLA

export const videoApi = axios.create({
  baseURL:
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=" +
    idVideos +
    "&key=AIzaSyDi4JkjcD1B42eaof_0S5Bh8s6um4U9xQI",
});
