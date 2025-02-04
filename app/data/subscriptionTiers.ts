export type TierNames = keyof typeof subscriptionTiers



export const subscriptionTiers = {
    ccsocial: {
    name: "CC-Social",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    stripePriceId: undefined,
},
ccsocialGamer: {
    name: "CC-Social Gamer",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    stripePriceId: undefined,
},
ccsocialCreator: {
    name: "CC-Social Creator",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    stripePriceId: undefined,
},
ccsocialPro: {
    name: "CC-Social Pro",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    stripePriceId: undefined,
}
} as const

export const subscriptionTiersInOrder = [
    subscriptionTiers.ccsocial,
    subscriptionTiers.ccsocialCreator,
    subscriptionTiers.ccsocialGamer,
    subscriptionTiers.ccsocialPro
] as const