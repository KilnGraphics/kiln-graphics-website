module.exports = {
  title: "Baked Minecraft Models",
  id: "bmm",
  logo: null,
  deprecated: true,
  features: [
    "Massively improved framerates when rendering more than 1000 entites",
    "Transparent Quad sorting",
    "Instanced Rendering for Entities"
  ],
  maintainers: ["Burger", "OroArmor"],
  description: "Baked Minecraft Models (BMM) or Baked Entity Models (BEM), is a Minecraft optimization mod that prebakes models when the game starts, and then uses animation matrices to animate models. This differs from how Minecraft works as currently, models are rebuilt with animations. This mod is no longer continued and is being added to Sodium as a feature (See Sodium PR #975).",
  short_description: "Converting Minecraft's animation system into a proper mesh with bones.",
  links: {
    github: "https://github.com/KilnGraphics/baked-minecraft-models"
  }
}
