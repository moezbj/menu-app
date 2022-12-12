import React from "react";
 import './cake.css'

const cakeHtml = `


<body>
    <div style="height: 100vh;" id="webXR">
        <model-viewer src="../assets/ar/gateau.glb" poster="../assets/ar/gateau.webp" shadow-intensity="1" ar camera-controls
            touch-action="pan-y" alt="A 3D model carousel">

            <div class="slider">
                <div class="slides">
                    <button class="slide selected" onclick="switchSrc(this, 'gateau')"
                        style="background-image: url('../assets/ar/gateau.webp');">
                    </button>
                    <button class="slide" onclick="switchSrc(this, 'tacos')"
                        style="background-image: url('../assets/ar/tacos.glb');">
                    </button>
                </div>
            </div>
        </model-viewer>
    </div>
    <script type="module">
        const modelViewer = document.querySelector("model-viewer");

        window.switchSrc = (element, name) => {
            const base = "../assets/ar/" + name;
            modelViewer.src = base + '.glb';
            modelViewer.poster = base + '.webp';
            const slides = document.querySelectorAll(".slide");
            slides.forEach((element) => { element.classList.remove("selected"); });
            element.classList.add("selected");
        };

        document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
            // Keep slider interactions from affecting the XR scene.
            ev.preventDefault();
        });
    </script>
  
</body>

</html>`;

const Cake = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: cakeHtml }} />
      <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></script>
    </div>
  );
};

export default Cake;
