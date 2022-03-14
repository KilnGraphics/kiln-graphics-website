module.exports = {
  title: "Rosella",
  id: "rosella",
  logo: null,
  deprecated: true,
  maintainers: ["Hydos", "CodingRays"],
  features: [
    "JVM based Vulkan Library",
    "Render Graphs to Optimize Calls",
    "GLB Model Loading"
  ],
  short_description: "A discontinued Java and Kotlin based Vulkan rendering engine.",
  description: "Rosella is a Vulkan rendering engine written in both Java and Kotlin. Its development started in early 2021 when Hydos wanted a Vulkan rendering engine. In mid 2021, OroArmor joined Hydos on development for Rosella, as well as making features required for Blaze4D. Over time, the original design of Rosella severely limited the performance the engine could provide, and many issues surrounding the split between Java and Kotlin led to the choice to discontinue Rosella and focus on Rosella RS.",
  links: {
    github: "https://github.com/KilnGraphics/rosella"
  },
  images: [{
    link: "/images/library/rosella/glb_test.png",
    description: "A test of the GLB Model Loader - Taken by Hydos"
  }, {
    link: "/images/library/rosella/glb_scene.png",
    description: "A scene rendered with Rosella and GLB - Taken by Hydos"
  }]
}
