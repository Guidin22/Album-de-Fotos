function mostrarImagenes() {
  var fechaSeleccionada = document.getElementById("fechas").value;
  var contenedorImagenes = document.getElementById("imagenes");

  // Borra las imágenes anteriores
  contenedorImagenes.innerHTML = "";

  // Asigna las imágenes según la fecha seleccionada
  if (fechaSeleccionada === "2023-13-11") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1y_32Hc4JQYNG7hEjSTdGhbCWw3kQPsag" alt="Imagen 1">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1XXPuYIQRV4jEq5ujjUyp6aubRkl9toNx" alt="Imagen 2">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-11-11") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1rOEAvIQyOmMAy8mxWy_1SM-AiXWRtQay" alt="Imagen 3">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1eGvXrCxGdjfyDXmZaKSb0w0czMC67kFM" alt="Imagen 4">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-07-11") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1GHrIkIjpydPRTdqgqrQV9KCLqi_Zf4Zk" alt="Imagen 5">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=17ydVEWiGBsGxmtjuxmk780MWdq1arPO0" alt="Imagen 6">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-27-10") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1sHsdUrSMZffc8DnijO-V2VGh8EkhIb98" alt="Imagen 7">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1rj6m_Y3YSy-zlOgSN7nncqzT6scfGnbf" alt="Imagen 8">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-15-09") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1Nr93ByHqi9LLKgkCIRGWwnyIYa9j4eQu" alt="Imagen 9">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1CRwgbAb3FfeKI79kwA_lKWYMHHIeKHMp" alt="Imagen 10">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-26-08") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1wnVuT8SI8_K9QHdhZnXCsps20uShhtLB" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1hjCq1DjkXHKu1sNdndGoUcsj8-2f6ZJu" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-25-08") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1KAQmIruIqTYK7XT43UYjFWtzi_evjnqj" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=138yxVUBakJTUyk0T8qZGDnZ0I7WCGoeK" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-13-08") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1vNczD7idbV-jNNxdzVZ_JUDtKQA1vj2f" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=16v5QQO7yVUQnw8f9425iTNFt8Ns6jdHg" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-06-08") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1SgmFlbRXU_1WvSnaswyXMsP7L1oooIAF" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1CQVSX_2k34y1NY9Z82XT3eriDHOHHNP6" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-15-07") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=18Hto3yM1v0LEGl_n2emw2oEGwF6bUwTe" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=14SbhfPHKZb9957aZiVY0E8hQYOO-AGb_" alt="Imagen 12">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1XOMjgCrBAmAH9QMnrfIfxe6F--LbYT8W" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1aLGbDbuM1-mMG_Ejez_VRQyTlsEAxU_4" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-28-06") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1ndre98OL0iqfLZx5WP6KU3F4Vd978PAj" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1_BaDZiTWo7eRYs7iGIW8Hmcw7JgssIk-" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1UmLtiCZMo2IUv3gbmSAO_oOLFu0pXFhq" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-22-06") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1B3V8OO8bdrZfWSxXqPsgJJoRLUpuIt_o" alt="Imagen 11">';
    
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-14-06") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1czoiePRWvR2OJmTonntn2VvQMZilSwfP" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1FUBsvtZy4CXD8f-FcBywnTAE4pUEUUWa" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1HKCZ8tspCzd3MXoDJoT9azDfKorG6bpF" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-04-06") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1J56PP8vZ1QUN-JVE8eAh41daHOAgfeuC" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1whxD2cHv7vnabKz6RPHVkQz4WtTqQ_xr" alt="Imagen 12">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1-V00T8_viBt9mznx89SYR7GUgT4yT8VU" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1fR21NqLxFOXeOEuzQaO3pbOrM_OaDQqO" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-24-05") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1g8ejByMCsjRrf-7jwbnZJFeT3I3z3tUr" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1vUchPGkLAeoSiGcGhvpcRxLzwVbjMq4Y" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-21-05") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1UebJ_8r3H2SERSa5WwWjyM182Oq2MJYS" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1ckMV2OIHyeRYU6Q43-VEyoDP31l12ugE" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=19zaw1AFgncDwXR0WVZlj6dl5O0vWf8dZ" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-18-05") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=167c5C644RjV2XMVL1358Lq8xjT5z7ZSU" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1f1XSqHqjTmkaR49wmvWsqZgW6DsLjk-q" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-02-05") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1ujFW9En-yUHXVRDyT1tOLHj39Lc_cL4n" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1sEPgzwkrRbTJoQIaJ4Fg5arUIrqmMAkI" alt="Imagen 12">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1C7CQMkxZfxVjWMEmQ7BcDISapqPCKWpl" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=11V7JbW2QF7zz6SZT5-1K3YE84HdQBp18" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-29-04") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1RhdEoLUe4SginSD1xzntPr-ticFtSk3B" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1btZl1chOFhJ145r1gDpXUiIezMD4ASPZ" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-23-04") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1_-BL9B6HmsCWTAXOmh0za8c-_qdiZfzq" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1s1zxP7WElwFp2amFUJsfINZ3rkZNHVfk" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1Clb-VqHadPEgoffZtFsoQA7v-g236rUP" alt="Imagen 12">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-15-04") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1ryivbxhitRZMxqKhKLiAB2Fe-ik9TJfC" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-05-04") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=14nRP3Jj9D5jeZrbOY6E9t6xXHYhX15Ma" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1pwpf6LPaNldeP_uSZptEVNXo3_EJzTYg" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-26-03") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1yxJ70aGZUnBq4OdsqWPK3mdPXf8W1BPX" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1_sThFb5cAt2XHIAxQ5LgBUNGtQwhDCMf" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1HX6CgEatHRUXAgYMq2bRf4Uz7IUvn0xv" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1nrsi2scBORbzhcdxffjsg1jkEv-DR4Sm" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1BRoTTj7TUMmEkg3zOiLejxWCIz5OdTlh" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-12-03") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1nZnm4i5FvUPcfaDwvMSG1SPJVfeYA0Pb" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1pqTHMXG79msU3_jIHa1_kIC2o220zELV" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1pWDZwSVwy7N78z_y0sR_2lvHTcRqTxFR" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=17Tz_iq8oTiVro8d6iahipGUUTdGE3UPf" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=17X1E_Ef92wuIDJ49aJDCVVyEDARhawnR" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-16-02") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1wvjZA1BESuEH8lP_A9PU0GJd77Xl5Mvk" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1MrmXuZpY2jeC-XyG1v2zacEHfDNMSlgt" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-14-02") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=182G431d2tUpX533ZZZV3SztVts24Kto6" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1KkUUcs5I3ZFPtmkHpbNMtW2XP1JwyxsV" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-11-02") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1WsDuMtP9Tq53aLBWdd5DOj_o8M7Qb_O-" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1wR_Fbojw-zG958e7Lskjaz3BuTkk8Lc7" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1L4bVwFyXkYvunCGRClrtc5IHzzN9aGbp" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-09-02") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1XS_kieqQZmUxakZM8qbC8R4znxXCn7Yk" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1aYF5jiGlQMp7e2wJjkMKM7bIY0NsYijE" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-31-01") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1A_XXlw9gTwxXfXkDTTqPFVT-Cj0oIV3J" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1L11VFETSx60qbPdkYFEL6YQtICqrnziu" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1Qhs_rKwurnXk-wWuhMmOE57rzSx7ZwjX" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1IHb3I5E2s3uQhPqpAhaSBnIui0xNS2I-" alt="Imagen 11">';
  } else if (fechaSeleccionada === "2023-22-01") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1zEGwu0HGjqsUpATcswg2RutIxajrHyfj" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1EWctYuuULY8m3DKXTkV6WDtxY8qtVAA1" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1LOpmUQYvTh3ztleVXprXTWMyhlcn4QOJ" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-02-01") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1E2Ie03XSYEDaxWlig2Bc0KnnfuwmwwRl" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1SSMwG-PpKeK0tLSVhi9eon_NosdfEBNw" alt="Imagen 12">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=12Em0rNS2-IW8KYDROzW9FwV46AL0n79b" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1bDDcGzRNlhihg-X98HV1OMCeKS-tZlRs" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-03-12") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1IFhpn4At6YKnYTRsH1_pWiRSxuhnIDPw" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1uhr3VnaGTOoI9pjy8eAQpmkunASQiTo0" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1HV5m9Ng2Lo41YLAHYQGjzFG1SRj9cpBL" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-06-12") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1eQWMO6POdpsSpu6r7xHq9mOJGeyJOUl5" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1bGvowcRt_g4YhsfDwD18_QK6v0SkYcoW" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1wnTTonlptSiJKg_p8yKWWqtScS7sw1Sz" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else if (fechaSeleccionada === "2023-20-12") {
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1ZyzoW8OiwAzZbsEMav8UEPy228JnrkAE" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1cg2L2uk-2quDTPd7Gt--WB21IsK15UjI" alt="Imagen 11">';
    contenedorImagenes.innerHTML += '<img src="https://drive.google.com/uc?id=1esNSATEdDfz-o0TQOSaU94GGvSuwcDEP" alt="Imagen 11">';
    // Agrega más imágenes si es necesario para esta fecha
  } else {
    contenedorImagenes.innerHTML += '<p>No hay imágenes disponibles para esta fecha</p>';
  }
}

