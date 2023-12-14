// this is array of data
// This is assumed to be given  by and API
const restaurants = [
    {
      info: {
        id: "635227",
        name: "Bakingo",
        cloudinaryImageId: "9fc6c247e09254670265953d03701280",
        locality: "Gokhle Marg",
        areaName: "Hazratganj",
        costForTwo: "₹299 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "635227",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "3818",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId:
          "cid=9059171~p=1~eid=0000018b-8157-d37d-3554-501a005a0174~srvts=1698682098557~45995",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=635227",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "405025",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Sahara Ganj Mall",
        areaName: "Hazratganj",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "405025",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2700,
        },
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=405025",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "59654",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Hazratganj",
        areaName: "Hazratganj",
        costForTwo: "₹350 for two",
        cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "59654",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "2",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=59654",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "231204",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Hazratganj",
        areaName: "Hazratganj",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "231204",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "166",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 03:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=231204",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "59529",
        name: "Classic Restaurant",
        cloudinaryImageId: "bnpy0ljxighgcq7i7gts",
        locality: "Mandir Marg",
        areaName: "Mahanagar",
        costForTwo: "₹200 for two",
        cuisines: ["Indian", "Chinese", "Continental", "Navratri Special"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "59529",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2500,
        },
        parentId: "17181",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId:
          "cid=8948525~p=2~eid=0000018b-8157-d37d-3554-501b005a0242~srvts=1698682098557~45995",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=59529",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "59284",
        name: "Domino's Pizza",
        cloudinaryImageId: "jd3b24bmmmwsdpezahj5",
        locality: "Hazratganj",
        areaName: "Hazratganj",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "59284",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "2456",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 03:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=59284",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "330433",
        name: "McDonald's",
        cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
        locality: "Sahara Ganj Mall",
        areaName: "Hazratganj",
        costForTwo: "₹400 for two",
        cuisines: ["American"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "330433",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "630",
        avgRatingString: "4.1",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 21:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=330433",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "59824",
        name: "Mashi Biryani World",
        cloudinaryImageId: "q0t8dkpigeideecc1hun",
        locality: "BN Road",
        areaName: "Lalbagh",
        costForTwo: "₹150 for two",
        cuisines: ["North Indian", "Biryani"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "59824",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "6332",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          exclusiveOfferMessage: "EXTRA 10% OFF",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=59824",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "82387",
        name: "Red Dragon (Chopstix)",
        cloudinaryImageId: "f6etwqizmuaxxe21vxmu",
        locality: "Sector C",
        areaName: "Mahanagar",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Arabian"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "82387",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2500,
        },
        parentId: "168369",
        avgRatingString: "3.8",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId:
          "cid=9031579~p=3~eid=0000018b-8157-d37d-3554-501c005a0350~srvts=1698682098557~45995",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 4.4,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "4.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=82387",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "573595",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "vcjlhsxo2dcjxhepdnld",
        locality: "Sapru Marg",
        areaName: "Hazratganj",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "573595",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2600,
        },
        parentId: "4961",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=573595",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "636723",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Umrao Mall",
        areaName: "Mahanagar",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "636723",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2500,
        },
        parentId: "61955",
        avgRatingString: "3.8",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=636723",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "59534",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Butler Colony",
        areaName: "Hazratganj",
        costForTwo: "₹300 for two",
        cuisines: ["Desserts", "Ice Cream"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "59534",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2700,
        },
        parentId: "5588",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "17 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-31 02:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          exclusiveOfferMessage: "EXTRA 10% OFF",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=59534",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "304778",
        name: "Madhurima Sweets",
        cloudinaryImageId: "lldbpboaipswvgcb5ytn",
        locality: "Phase 11",
        areaName: "Phase 11",
        costForTwo: "₹200 for two",
        cuisines: ["Sweets", "Indian", "Snacks"],
        avgRating: 4.4,
        veg: true,
        feeDetails: {
          restaurantId: "304778",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "8217",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        promoted: true,
        adTrackingId:
          "cid=8948615~p=4~eid=0000018b-8157-d37d-3554-501d005a0410~srvts=1698682098557~45995",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=304778",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "619568",
        name: "Taco Bell",
        cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
        locality: "Saharanganj Mall",
        areaName: "Hazratganj",
        costForTwo: "₹300 for two",
        cuisines: ["Mexican"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "619568",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "1557",
        avgRatingString: "4.0",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=619568",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "482623",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        cloudinaryImageId: "kvyfk7rtq0fbnziynffg",
        locality: "Nawal Kishore Road",
        areaName: "Hazratganj",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
        avgRating: 4.6,
        veg: true,
        feeDetails: {
          restaurantId: "482623",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2000,
        },
        parentId: "582",
        avgRatingString: "4.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=482623",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "75446",
        name: "Jahangir Hotel",
        cloudinaryImageId: "d4638e3377ec4f03a7435c3c61849837",
        locality: "Nishat Ganj",
        areaName: "Nishat Ganj",
        costForTwo: "₹300 for two",
        cuisines: ["Mughlai"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "75446",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2500,
        },
        parentId: "108288",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-30 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          exclusiveOfferMessage: "EXTRA 10% OFF",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=75446",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  ];
export default restaurants;