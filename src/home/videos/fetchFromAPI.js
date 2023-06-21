import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  return mockResponse;
  //   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  //   return data;
};

const mockResponse = {
  kind: "youtube#searchListResponse",
  nextPageToken: "CDIQAA",
  regionCode: "DE",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 50,
  },
  items: [
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "NCclOXqCxA8",
      },
      snippet: {
        publishedAt: "2017-10-13T14:46:17Z",
        channelId: "UCj4mJaB6K3a6eCw1xIQ2jsA",
        title: "Daya - New (Lyrics / Lyrics Video)",
        description:
          "Daya - New (Lyrics / Lyrics Video) Stream/Download http://smarturl.it/NewDaya Follow Daya Website: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/NCclOXqCxA8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/NCclOXqCxA8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/NCclOXqCxA8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "NewMelody",
        liveBroadcastContent: "none",
        publishTime: "2017-10-13T14:46:17Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "RK7-oa8_DkQ",
      },
      snippet: {
        publishedAt: "2018-02-14T14:00:53Z",
        channelId: "UCNqFDjYTexJDET3rPDrmJKg",
        title: "Daya - New (Lyrics)",
        description:
          "Daya - New (Lyrics) ⏬ Download / Stream: http://smarturl.it/NewDaya Turn on notifications to stay updated with new uploads!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/RK7-oa8_DkQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/RK7-oa8_DkQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/RK7-oa8_DkQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "7clouds",
        liveBroadcastContent: "none",
        publishTime: "2018-02-14T14:00:53Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "YhVMF-atlcc",
      },
      snippet: {
        publishedAt: "2023-06-17T12:30:17Z",
        channelId: "UCXIJgqnII2ZOINSWNOGFThA",
        title: "Gutfeld: This new epidemic is sweeping the nation",
        description:
          "'Gutfeld!' panelists react to allegations diabetes medication Ozempic may cause 'Ozempic finger.' #foxnews #gutfeld #fox ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YhVMF-atlcc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/YhVMF-atlcc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/YhVMF-atlcc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Fox News",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T12:30:17Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "k2qgadSvNyU",
      },
      snippet: {
        publishedAt: "2017-07-07T09:00:05Z",
        channelId: "UC-J-KZfRV8c13fOCkhXdLiQ",
        title: "Dua Lipa - New Rules (Official Music Video)",
        description:
          "The official music video for Dua Lipa - New Rules Taken from her self-titled debut studio album released in 2017, which featured ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/k2qgadSvNyU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/k2qgadSvNyU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/k2qgadSvNyU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Dua Lipa",
        liveBroadcastContent: "none",
        publishTime: "2017-07-07T09:00:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "cAMHx-m9oh8",
      },
      snippet: {
        publishedAt: "2023-05-15T12:30:06Z",
        channelId: "UC783dnzJqf2ghHp_pFLYbGA",
        title:
          "Kya Loge Tum | Akshay Kumar | Amyra Dastur | BPraak | Jaani | Arvindr Khaira | Zohrajabeen",
        description:
          "Desi Melodies presents in association with Cape Of Good Films & Azeem Dayani the first single, 'Kya Loge Tum,' from B Praak's ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/cAMHx-m9oh8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/cAMHx-m9oh8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/cAMHx-m9oh8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "DM - Desi Melodies",
        liveBroadcastContent: "none",
        publishTime: "2023-05-15T12:30:06Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "1H8QxBhY__I",
      },
      snippet: {
        publishedAt: "2023-06-16T23:30:41Z",
        channelId: "UC3v3VpUyf34SLfN1IyUlMeA",
        title:
          "News🔴today nepali news  aaj ka mukhya samachar taja l  आज असार २  गतेका मुख्य समाचार",
        description:
          "News today nepali news aaj ka mukhya samachar taja आज असार २ गतेका मुख्य समाचार Breaking news ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/1H8QxBhY__I/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/1H8QxBhY__I/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/1H8QxBhY__I/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "inside nepal news",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T23:30:41Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "sVTy_wmn5SU",
      },
      snippet: {
        publishedAt: "2023-01-03T11:30:01Z",
        channelId: "UC3IZKseVpdzPSBaWxBxundA",
        title:
          "NewJeans (뉴진스) &#39;OMG&#39; Official MV (Performance ver.1)",
        description:
          "NewJeans (뉴진스) 'OMG' Official MV (Performance ver.1) Producer: MIN HEE JIN Music Video Director: Wooseok Shin ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/sVTy_wmn5SU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/sVTy_wmn5SU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/sVTy_wmn5SU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "HYBE LABELS",
        liveBroadcastContent: "none",
        publishTime: "2023-01-03T11:30:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "Rkz-3-0KN0c",
      },
      snippet: {
        publishedAt: "2023-06-19T02:37:12Z",
        channelId: "UCDM4cG9T5jvdV3SeHT6ILCw",
        title:
          "Come Follow Me New Testament Matthew 28; Mark 16; Luke 24; John 20-21 (Jun 26-Jul 2) Don&#39;t Miss This",
        description:
          "Some of our favorite scriptural moments are found in this lesson. The road to Emmaus. Facing the doubts of Thomas.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Rkz-3-0KN0c/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Rkz-3-0KN0c/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Rkz-3-0KN0c/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Don't Miss This",
        liveBroadcastContent: "none",
        publishTime: "2023-06-19T02:37:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "NcPEONqrpCU",
      },
      snippet: {
        publishedAt: "2023-06-17T02:18:58Z",
        channelId: "UC9qr4fem8L5HEx0IDoktEpw",
        title:
          "2023 New Songs ( Latest English Songs 2023 ) 🥒 Pop Music 2023 New Song 🥒 New Popular Songs 2023",
        description:
          "2023 New Songs ( Latest English Songs 2023 ) Pop Music 2023 New Song New Popular Songs 2023 Welcome to Pop ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/NcPEONqrpCU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/NcPEONqrpCU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/NcPEONqrpCU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Pop Internacionais",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T02:18:58Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "6ZKDdzqN6B4",
      },
      snippet: {
        publishedAt: "2023-02-16T10:04:39Z",
        channelId: "UCMvNj-EdziRVn5BIwJV6iZg",
        title: "N.E.W.",
        description:
          "Provided to YouTube by Universal Music Group N.E.W. · Hiromi · Tomoaki Baba · Shun Ishiwaka BLUE GIANT ℗ A Universal ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/6ZKDdzqN6B4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/6ZKDdzqN6B4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/6ZKDdzqN6B4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Hiromi - Topic",
        liveBroadcastContent: "none",
        publishTime: "2023-02-16T10:04:39Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "11OWuPcElJw",
      },
      snippet: {
        publishedAt: "2023-05-25T05:30:01Z",
        channelId: "UCye6Oz0mg46S362LwARGVcA",
        title:
          "Zihaal e Miskin (Video) Javed-Mohsin | Vishal Mishra, Shreya Ghoshal | Rohit Z, Nimrit A | Kunaal V",
        description:
          "Presenting the official video of Zihaal e Miskin - the heartbreak song of the season. Featuring Rohit Zinjurke and Nimrit Ahluwalia, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/11OWuPcElJw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/11OWuPcElJw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/11OWuPcElJw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "VYRLOriginals",
        liveBroadcastContent: "none",
        publishTime: "2023-05-25T05:30:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "agXQQDasq0U",
      },
      snippet: {
        publishedAt: "2023-06-16T04:00:11Z",
        channelId: "UCpTaAz_BxtkUB1qc8JTU_7g",
        title: "Doja Cat - Attention (Official Video)",
        description:
          "Doja Cat // Attention // Get It Here // https://DojaCat.lnk.to/attention Director: Tanu Muino Producer: Robert Katz Label Producer: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/agXQQDasq0U/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/agXQQDasq0U/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/agXQQDasq0U/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "dojacatVEVO",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T04:00:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "X7WXHhokylc",
      },
      snippet: {
        publishedAt: "2023-05-22T07:00:08Z",
        channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",
        title:
          "Tere Vaaste | Zara Hatke Zara Bachke | Vicky Kaushal, Sara Ali Khan, Varun J, Sachin-Jigar,Amitabh B",
        description:
          "TereVaaste is here and it's sure to tug at your heartstrings starring Vicky Kaushal and Sara Ali Khan. The song has been sung by ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/X7WXHhokylc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/X7WXHhokylc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/X7WXHhokylc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Saregama Music",
        liveBroadcastContent: "none",
        publishTime: "2023-05-22T07:00:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "8sLS2knUa6Y",
      },
      snippet: {
        publishedAt: "2023-05-16T13:05:10Z",
        channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",
        title:
          "Phir Aur Kya Chahiye| Zara Hatke Zara Bachke| Vicky K, Sara Ali K, Arijit Singh,Sachin-Jigar,Amitabh",
        description:
          "Lose yourself in the magic of love with the much-awaited song \"Phir Aur Kya Chahiye'' from the film 'Zara Hatke Zara Bachke'.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/8sLS2knUa6Y/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/8sLS2knUa6Y/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/8sLS2knUa6Y/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Saregama Music",
        liveBroadcastContent: "none",
        publishTime: "2023-05-16T13:05:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "VcrDgF79uOs",
      },
      snippet: {
        publishedAt: "2023-06-16T04:32:05Z",
        channelId: "UCcvNYxWXR_5TjVK7cSCdW-g",
        title:
          "Blackia (Full Video) | Geeta Zaildar, Gurlej Akhtar | Latest Punjabi Songs 2023",
        description:
          'Enjoy the video of our new punjabi song " Blackia " by Geeta Zailda, Gurlej Akhtar in which music is given by Jassi X & the Lyrics ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/VcrDgF79uOs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/VcrDgF79uOs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/VcrDgF79uOs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "T-Series Apna Punjab",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T04:32:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "1dGdQseXgZE",
      },
      snippet: {
        publishedAt: "2023-05-11T23:00:00Z",
        channelId: "UCi4vci-25S566Ll2dlHta2A",
        title:
          "Top Hits 2023 | New Popular Songs 2023 | Pop Songs 2023 | Best English Songs 2023 | 2023 New Songs",
        description:
          "Top Hits 2023 | New Popular Songs 2023 | Pop Songs 2023 | Best English Songs 2023 | 2023 New Songs ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/1dGdQseXgZE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/1dGdQseXgZE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/1dGdQseXgZE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Music Collection",
        liveBroadcastContent: "none",
        publishTime: "2023-05-11T23:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "LQlC_p1wgvA",
      },
      snippet: {
        publishedAt: "2023-06-16T17:00:07Z",
        channelId: "UC4OWd0CnbvaiaozgLZO-L4Q",
        title: "Skilla Baby - Brand New [Official Video]",
        description:
          "Stream Skilla Baby's new EP We Eat the Most Reloaded on all platforms – OUT NOW https://wetm.lnk.to/WETMReloaded Follow ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/LQlC_p1wgvA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/LQlC_p1wgvA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/LQlC_p1wgvA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Skilla Baby",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T17:00:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "XpqkF3_ey1I",
      },
      snippet: {
        publishedAt: "2023-06-16T21:00:27Z",
        channelId: "UCZYTClx2T1of7BRZ86-8fow",
        title: "Is That “New Car Smell” Dangerous?",
        description:
          "Some of us can't get enough of that new car smell. But certain volatile organic compounds (VOCs) that help create this aroma are ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/XpqkF3_ey1I/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/XpqkF3_ey1I/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/XpqkF3_ey1I/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "SciShow",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T21:00:27Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "9Q7UfKcW_PI",
      },
      snippet: {
        publishedAt: "2023-06-16T02:00:02Z",
        channelId: "UCkKDpnzIG29MA--Sh6oOtWg",
        title:
          "Must Watch New Special Comedy Video 2023 😎Totally Amazing Comedy Episode 220 #busyfunltd",
        description:
          "Hello Dear Viewers, This is a funny videos channel. We make funny videos in our village. Because We are live in village.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/9Q7UfKcW_PI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/9Q7UfKcW_PI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/9Q7UfKcW_PI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Busy Fun Ltd",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T02:00:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "BabOo-Zr9Xc",
      },
      snippet: {
        publishedAt: "2023-06-17T11:00:13Z",
        channelId: "UC9r9HYFxEQOBXSopFS61ZWg",
        title:
          "Donald Trump Makes SMOKING GUN CONFESSION in New HIGHLY INCRIMINATING Posts",
        description:
          "MeidasTouch host Ben Meiselas reports on recent posts by Donald Trump on his social media platform that are incredibly ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/BabOo-Zr9Xc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/BabOo-Zr9Xc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/BabOo-Zr9Xc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MeidasTouch",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T11:00:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "Ktpxowv52Mk",
      },
      snippet: {
        publishedAt: "2023-06-17T10:00:14Z",
        channelId: "UCAOtE1V7Ots4DjM8JLlrYgg",
        title:
          "Peppa Pig Tales 🏀 Peppa Goes To The Arcade 🏀 BRAND NEW Peppa Pig Episodes",
        description:
          "Watch More BRAND NEW Peppa Pig Tales Here: https://bit.ly/3LMLyJU Life as a little one is a journey of constant discovery, and ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Ktpxowv52Mk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Ktpxowv52Mk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Ktpxowv52Mk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Peppa Pig - Official Channel",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T10:00:14Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "KmtEAroiOBA",
      },
      snippet: {
        publishedAt: "2023-06-15T21:00:10Z",
        channelId: "UCCnngeLwoZCSSuSs9ePuDqA",
        title: "RANKING ALL NEW BLUSHES FROM WORST TO BEST!!",
        description:
          "Mentioned (Alphabetical Order) Charlotte Tilbury Pinkgasm Beauty Wand (Pinkgasm Sunset) ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/KmtEAroiOBA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/KmtEAroiOBA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/KmtEAroiOBA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Morgan Turner",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T21:00:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "1g4Vnwiv8iU",
      },
      snippet: {
        publishedAt: "2023-06-17T02:19:43Z",
        channelId: "UCW5tLKsvXqeKvrqo9QZdUng",
        title:
          "TOP 140 Songs of 2022 2023 💄💄 Best English Songs (Best Hit Music Playlist) on Spotify 2023. vol17",
        description:
          "TOP 140 Songs of 2022 2023 Best English Songs (Best Hit Music Playlist) on Spotify 2023. vol17 ✨ You deserve to be ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/1g4Vnwiv8iU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/1g4Vnwiv8iU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/1g4Vnwiv8iU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Something old, something new",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T02:19:43Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "zZl2JspBiEs",
      },
      snippet: {
        publishedAt: "2023-06-17T15:00:44Z",
        channelId: "UCAj9nn-gOcKuD4ropg44HCw",
        title:
          "New Rap Songs 2023 Mix June | Trap Tape #85 | New Hip Hop 2023 Mixtape | DJ Noize",
        description:
          "The best of new Rap songs of June 2023 in the mix! New Hip Hop 2023 mixtape. Join my Patreon community and get access to ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/zZl2JspBiEs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/zZl2JspBiEs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/zZl2JspBiEs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "DJ Noize",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T15:00:44Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "KGz5xnoZJjE",
      },
      snippet: {
        publishedAt: "2023-06-12T14:23:48Z",
        channelId: "UCNSdjX4ry9fICqeObdZPAZQ",
        title: "Our New House Morning Routine",
        description:
          "Vlog # Gaurav's Instagram https://www.instagram.com/taneja.gaurav/ Ritu's Instagram https://www.instagram.com/riturathee/ ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/KGz5xnoZJjE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/KGz5xnoZJjE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/KGz5xnoZJjE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Flying Beast",
        liveBroadcastContent: "none",
        publishTime: "2023-06-12T14:23:48Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "cRMgyxhZQyw",
      },
      snippet: {
        publishedAt: "2023-06-12T13:30:13Z",
        channelId: "UCRzPUBhXUZHclB7B5bURFXw",
        title:
          "How New Jersey&#39;s Busiest Diner Serves 15,000 People per Week — The Experts",
        description:
          "Since 1942, Top's Diner in East Newark, New Jersey, has been known as one of the best diners in the country.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/cRMgyxhZQyw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/cRMgyxhZQyw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/cRMgyxhZQyw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Eater",
        liveBroadcastContent: "none",
        publishTime: "2023-06-12T13:30:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "ccgC6-EUrww",
      },
      snippet: {
        publishedAt: "2023-06-16T13:30:12Z",
        channelId: "UChDKyKQ59fYz3JO2fl0Z6sg",
        title:
          "Qantas orders 12 new airbus planes designed for 20-hour flights",
        description:
          "In 2019, Qantas tested a research non-stop flight from New York to Sydney, Australia. Now the results are in on whether ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ccgC6-EUrww/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ccgC6-EUrww/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ccgC6-EUrww/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "TODAY",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T13:30:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "IgYFdKMHccY",
      },
      snippet: {
        publishedAt: "2023-06-16T16:54:29Z",
        channelId: "UCTgQTM6B97Tk5FPNOWZMB1Q",
        title: "*NEW* MK-ALPHA in Fortnite",
        description:
          "Join for custom games & more! ▻ https://discord.gg/x2twins Follow us here! ▻ TWITCH - https://www.twitch.tv/x2twins ▻ TWITTER ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/IgYFdKMHccY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/IgYFdKMHccY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/IgYFdKMHccY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "x2Twins",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T16:54:29Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "4x1AaRa2tCQ",
      },
      snippet: {
        publishedAt: "2023-06-15T11:30:02Z",
        channelId: "UC3uIzA5xowHSCIiu3LmPOeA",
        title:
          "Carnival Venezia Inaugural Event - Manhattan Cruise Terminal Pier 88, New York City - June 14, 2023",
        description:
          "Welcome to the inaugural event for Carnival Venezia! Join us as we head to Pier 88 at the Manhattan Cruise Terminal in New ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/4x1AaRa2tCQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/4x1AaRa2tCQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/4x1AaRa2tCQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "ParoDeeJay",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T11:30:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "CIV-RLLsSFI",
      },
      snippet: {
        publishedAt: "2023-06-19T04:30:05Z",
        channelId: "UCum5kIr4aqgn9Dc21JdYCWA",
        title: "TUBA KE LIYE BANA NEW KITCHEN | Armaan Malik",
        description: "Our new song: https://youtu.be/5LODismCZSA.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/CIV-RLLsSFI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/CIV-RLLsSFI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/CIV-RLLsSFI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Armaan Malik",
        liveBroadcastContent: "none",
        publishTime: "2023-06-19T04:30:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "yeODD0VfWno",
      },
      snippet: {
        publishedAt: "2023-06-15T03:52:52Z",
        channelId: "UCG0xyRVgb5Yf1lvQxkRrYYQ",
        title: "New Zealand&#39;s economy enters a recession | nzherald.co.nz",
        description:
          "New Zealand's economy has entered a recession: Business Editor-at-Large Liam Dann explains exactly what that means.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/yeODD0VfWno/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/yeODD0VfWno/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/yeODD0VfWno/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "nzherald.co.nz",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T03:52:52Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "Eghzn4-nbyU",
      },
      snippet: {
        publishedAt: "2021-02-23T03:57:31Z",
        channelId: "UCh2RRsVeAOhRWsd-d5KVLhw",
        title: "Daya - New (Remix Tikok Ver)",
        description: "daya #new #tiktokmusic.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Eghzn4-nbyU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Eghzn4-nbyU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Eghzn4-nbyU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Bubble tea",
        liveBroadcastContent: "none",
        publishTime: "2021-02-23T03:57:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "FNBp6kjDUY4",
      },
      snippet: {
        publishedAt: "2023-06-16T17:59:00Z",
        channelId: "UCTrQ7HXWRRxr7OsOtodr2_w",
        title: "Boris Johnson breaks ministerial code with new Daily Mail job",
        description:
          "It's been a week since the MP for Uxbridge and South Ruislip, one Boris Johnson, stepped down ahead of a scathing report ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/FNBp6kjDUY4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/FNBp6kjDUY4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/FNBp6kjDUY4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Channel 4 News",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T17:59:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "vIZrkmyjai0",
      },
      snippet: {
        publishedAt: "2023-05-31T11:00:46Z",
        channelId: "UCzaSW4DwMQcA-pOx5TVtKTg",
        title:
          "Best Sinhala New Song 2023 ( New Sinhala Song Collection ) Sinhala New Song | Aluth Sindu",
        description:
          "Thank For Watch This Video. ⚪Title - Best Sinhala Rap 2023 | New Songs Collection 2023 | Aluth Sindu 2023 | New Sinhala ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/vIZrkmyjai0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/vIZrkmyjai0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/vIZrkmyjai0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Vindana Music",
        liveBroadcastContent: "none",
        publishTime: "2023-05-31T11:00:46Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "lzEop75AeOk",
      },
      snippet: {
        publishedAt: "2023-02-12T16:31:20Z",
        channelId: "UCFFbwnve3yF62-tVXkTyHqg",
        title:
          "Naiyo Lagda - Kisi Ka Bhai Kisi Ki Jaan | Salman Khan &amp; Pooja Hegde | Himesh R, Kamaal K, Palak M",
        description:
          "SUBSCRIBE to Zee Music Company - https://bit.ly/2yPcBkS To Stream & Download Full Song: Spotify - https://spoti.fi/3E2GhcY ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/lzEop75AeOk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/lzEop75AeOk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/lzEop75AeOk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Zee Music Company",
        liveBroadcastContent: "none",
        publishTime: "2023-02-12T16:31:20Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "3QgLwpuDGhI",
      },
      snippet: {
        publishedAt: "2023-06-15T19:00:02Z",
        channelId: "UCYNbYGl89UUowy8oXkipC-Q",
        title:
          "New study claims Betelgeuse supernova IMMINENT (decades not centuries!) | Night Sky News June 2023",
        description:
          "To transform the way you work with digital notes and get organised, check out the reMarkable 2 paper tablet here: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/3QgLwpuDGhI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/3QgLwpuDGhI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/3QgLwpuDGhI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Dr. Becky",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T19:00:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "R_BAiJC1ev0",
      },
      snippet: {
        publishedAt: "2023-06-12T15:37:47Z",
        channelId: "UCZcZtGe48ELdue-H5ydPe9g",
        title:
          "YouTubers REACT To @Skylord69 NEW SONG! | Total Gaming Face Reveal?, Gamerfleet ANGRY",
        description:
          "YouTubers REACT To ‎@Skylord69 NEW SONG! | Total Gaming Face Reveal?, Gamerfleet ANGRY Follow Me on Instagram- ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/R_BAiJC1ev0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/R_BAiJC1ev0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/R_BAiJC1ev0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "SHREY YT",
        liveBroadcastContent: "none",
        publishTime: "2023-06-12T15:37:47Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "zyQlvUAYcU0",
      },
      snippet: {
        publishedAt: "2023-06-17T06:02:39Z",
        channelId: "UC72PuhDwKtZ5MikpGNhPAtA",
        title:
          "Every Single NEW Feature Added in The San Andreas Mercenaries DLC | GTA Online Update",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/zyQlvUAYcU0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/zyQlvUAYcU0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/zyQlvUAYcU0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "TGG",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T06:02:39Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "gI9SbNnpMIY",
      },
      snippet: {
        publishedAt: "2023-06-15T16:06:31Z",
        channelId: "UCCvgLV2Ixb8KCemj-UtXZ-g",
        title: "King and Princess Anne Present New Sovereign Standard",
        description:
          "King Charles and Anne, The Princess Royal have presented the new Sovereign's Standard to The Blues and Royals during a ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gI9SbNnpMIY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/gI9SbNnpMIY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gI9SbNnpMIY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The Royal Family Channel",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T16:06:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "lluPl8UWLNw",
      },
      snippet: {
        publishedAt: "2023-06-15T23:00:08Z",
        channelId: "UC_Ftxa2jwg8R4IWDw48uyBw",
        title: "Sailing At Night: The Battleship&#39;s Running Lights",
        description:
          "In this episode we're talking about the ship's running lights. To send Ryan a message on Facebook: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/lluPl8UWLNw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/lluPl8UWLNw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/lluPl8UWLNw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Battleship New Jersey",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T23:00:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "iVxKp_d62ow",
      },
      snippet: {
        publishedAt: "2023-06-15T14:28:08Z",
        channelId: "UC14Yc2Qv92DMuyNRlHvpo2Q",
        title:
          "TVアニメ『Dr.STONE NEW WORLD』第1クールOP＜ワスレガタキ＞スペシャルアニメMV",
        description:
          "TVアニメ『Dr.STONE NEW WORLD』10月より第2クール放送決定‼ 第2クール放送決定を記念し、第1クールの映像をふんだんに ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/iVxKp_d62ow/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/iVxKp_d62ow/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/iVxKp_d62ow/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "TOHO animation チャンネル",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T14:28:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "0SVWTNwhAtA",
      },
      snippet: {
        publishedAt: "2023-05-05T04:30:10Z",
        channelId: "UCQuLyitHTE9LfUAxlhDfgig",
        title:
          "BILLA SONIPAT ALA : Over Confidence | Komal | Latest Haryanvi Songs 2023 | Marta Na Bhole Ka Chela",
        description:
          "Over Confidence by Billa Sonipat Ala | Komal Chaudhary | Deepty | New Haryanvi Songs | Haryanvi Beat Songs White Hill ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/0SVWTNwhAtA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/0SVWTNwhAtA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/0SVWTNwhAtA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "White Hill Dhaakad",
        liveBroadcastContent: "none",
        publishTime: "2023-05-05T04:30:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "4e8zAYvbOmQ",
      },
      snippet: {
        publishedAt: "2023-06-17T02:16:18Z",
        channelId: "UCW5tLKsvXqeKvrqo9QZdUng",
        title:
          "2023 New Songs (Latest English Songs 2023) 🔔 🔔  Pop Music 2023 New Song 🔔  Top English Chill Songs",
        description:
          "2023 New Songs (Latest English Songs 2023) Pop Music 2023 New Song Top English Chill Songs ▽ Follow Channel: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/4e8zAYvbOmQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/4e8zAYvbOmQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/4e8zAYvbOmQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Something old, something new",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T02:16:18Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "TcA3OG_WAE4",
      },
      snippet: {
        publishedAt: "2023-05-05T15:00:32Z",
        channelId: "UCeBWIR6qAv2itoiDWO4FHow",
        title:
          "Veronica Adane - Abebaye - ቬሮኒካ አዳነ - አበባዬ - New Ethiopian Music Video 2023 (Official Video)",
        description:
          "Veronica Adane - Abebaye - ቬሮኒካ አዳነ - አበባዬ - New Ethiopian Music Video 2023 (Official Video) #ethiopianmusic ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/TcA3OG_WAE4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/TcA3OG_WAE4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/TcA3OG_WAE4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nahom Records Inc",
        liveBroadcastContent: "none",
        publishTime: "2023-05-05T15:00:32Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "3MIirZi4Zf0",
      },
      snippet: {
        publishedAt: "2023-06-17T11:02:57Z",
        channelId: "UCzYiufW5gc8gFa346OMvoWg",
        title:
          "Ferrari mai new tyre or rim daal diye😍||Khushi mai Sab ko mithai khilai❤️",
        description:
          "hope you enjoyed the video❤️ Please do LIKE,COMMENT,SHARE and SUBSCRIBE for more interesting and entertaining ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/3MIirZi4Zf0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/3MIirZi4Zf0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/3MIirZi4Zf0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Shaz Safder World",
        liveBroadcastContent: "none",
        publishTime: "2023-06-17T11:02:57Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "Ojl6X5UxDbs",
      },
      snippet: {
        publishedAt: "2023-06-15T15:41:13Z",
        channelId: "UCNvzD7Z-g64bPXxGzaQaa4g",
        title: "15 BRAND NEW Gameplay Reveals of the Last Week",
        description:
          "Highlighting some additional gameplay reveals from the barrage of gaming news over the last week. Subscribe for more: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Ojl6X5UxDbs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Ojl6X5UxDbs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Ojl6X5UxDbs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "gameranx",
        liveBroadcastContent: "none",
        publishTime: "2023-06-15T15:41:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "XIOoqJyx8E4",
      },
      snippet: {
        publishedAt: "2023-04-03T09:00:00Z",
        channelId: "UCMki_UkHb4qSc0qyEcOHHJw",
        title: "NewJeans (뉴진스) &#39;Zero&#39; Official MV",
        description:
          "Connect with NewJeans PHONING https://phoning.onelink.me/KG15/n7452q87 OFFICIAL YOUTUBE ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/XIOoqJyx8E4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/XIOoqJyx8E4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/XIOoqJyx8E4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "NewJeans",
        liveBroadcastContent: "none",
        publishTime: "2023-04-03T09:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "b8GmIPEGT64",
      },
      snippet: {
        publishedAt: "2023-06-16T22:00:28Z",
        channelId: "UCjemQfjaXAzA-95RKoy9n_g",
        title: "Did Cardano Bottom Out? (Altcoins Making New Lows)",
        description:
          "Altcoins are making new lows. In this livestream recap, we provide a cardano price prediction and other altcoin market updates.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/b8GmIPEGT64/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/b8GmIPEGT64/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/b8GmIPEGT64/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "BitBoy Crypto",
        liveBroadcastContent: "none",
        publishTime: "2023-06-16T22:00:28Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "3XzrYAIvR4E",
      },
      snippet: {
        publishedAt: "2023-06-18T22:44:12Z",
        channelId: "UCJCreS7pODbA6XYRsI5fdLg",
        title: "Cooling centers open around New Orleans amidst dangerous heat",
        description:
          "Cooling centers have opened around the city and WWL-TV is here to give you the rundown on what to do in the excessive heat ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/3XzrYAIvR4E/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/3XzrYAIvR4E/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/3XzrYAIvR4E/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "WWLTV",
        liveBroadcastContent: "none",
        publishTime: "2023-06-18T22:44:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "5QAcE7xrTGU",
      },
      snippet: {
        publishedAt: "2023-06-05T08:14:40Z",
        channelId: "UCUgvCC6iygghq-f2r96P-Jw",
        title:
          "Father Saab ke liye Har color ka new Tshirt #bindasskavya #shorts",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/5QAcE7xrTGU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/5QAcE7xrTGU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/5QAcE7xrTGU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Bindass Kavya",
        liveBroadcastContent: "none",
        publishTime: "2023-06-05T08:14:40Z",
      },
    },
  ],
};
