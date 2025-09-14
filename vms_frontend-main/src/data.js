export const allNvrs = {
  nvr1: {
    cameras: [
      {
        camera_id: "1",
        camera_name: "In Cam",
        recordings: [
          {
            date: "09/01/2025",
            hourly_recordings: [
              {
                time: "10:00 - 12:00",
                streaming_url:
                  "https://stream-fastly.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8",
              },
              {
                time: "12:00 - 14:00",
                streaming_url:
                  "https://d1gnaphp93fop2.cloudfront.net/videos/multiresolution/rendition_new10.m3u8",
              },
            ],
          },
          {
            date: "10/01/2025",
            hourly_recordings: [
              {
                time: "08:00 - 10:00",
                streaming_url: "https://example.com/stream1.m3u8",
              },
              {
                time: "14:00 - 16:00",
                streaming_url: "https://example.com/stream2.m3u8",
              },
            ],
          },
        ],
      },
      {
        camera_id: "2",
        camera_name: "Front Cam",
        recordings: [
          {
            date: "09/01/2025",
            hourly_recordings: [
              {
                time: "08:00 - 10:00",
                streaming_url:
                  "https://res.cloudinary.com/dannykeane/video/upload/sp_full_hd/q_80:qmax_90,ac_none/v1/dk-memoji-dark.m3u8",
              },
              {
                time: "14:00 - 16:00",
                streaming_url:
                  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              },
            ],
          },
          {
            date: "10/01/2025",
            hourly_recordings: [
              {
                time: "10:00 - 12:00",
                streaming_url: "https://example.com/frontcam1.m3u8",
              },
              {
                time: "16:00 - 18:00",
                streaming_url: "https://example.com/frontcam2.m3u8",
              },
            ],
          },
        ],
      },
    ],
  },
  nvr2: {
    cameras: [
      {
        camera_id: "3",
        camera_name: "Side Cam",
        recordings: [
          {
            date: "09/01/2025",
            hourly_recordings: [
              {
                time: "06:00 - 08:00",
                streaming_url:
                  "https://diceyk6a7voy4.cloudfront.net/e78752a1-2e83-43fa-85ae-3d508be29366/hls/fitfest-sample-1_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.0Mbps_qvbr.m3u8",
              },
              {
                time: "16:00 - 18:00",
                streaming_url:
                  "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
              },
            ],
          },
          {
            date: "10/01/2025",
            hourly_recordings: [
              {
                time: "08:00 - 10:00",
                streaming_url: "https://example.com/sidecam1.m3u8",
              },
              {
                time: "18:00 - 20:00",
                streaming_url: "https://example.com/sidecam2.m3u8",
              },
            ],
          },
        ],
      },
      {
        camera_id: "4",
        camera_name: "Backyard Cam",
        recordings: [
          {
            date: "09/01/2025",
            hourly_recordings: [
              {
                time: "00:00 - 02:00",
                streaming_url:
                  "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
              },
              {
                time: "10:00 - 12:00",
                streaming_url:
                  "http://cdn-fms.rbs.com.br/vod/hls_sample1_manifest.m3u8",
              },
            ],
          },
          {
            date: "10/01/2025",
            hourly_recordings: [
              {
                time: "02:00 - 04:00",
                streaming_url: "https://example.com/backyardcam1.m3u8",
              },
              {
                time: "12:00 - 14:00",
                streaming_url: "https://example.com/backyardcam2.m3u8",
              },
            ],
          },
        ],
      },
    ],
  },
  nvr3: {
    cameras: [
      {
        camera_id: "5",
        camera_name: "Garage Cam",
        recordings: [
          {
            date: "09/01/2025",
            hourly_recordings: [
              {
                time: "02:00 - 04:00",
                streaming_url:
                  "http://nasatv-lh.akamaihd.net/i/NASA_101@319270/index_1000_av-p.m3u8?sd=10&rebase=on",
              },
              {
                time: "12:00 - 14:00",
                streaming_url:
                  "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8",
              },
            ],
          },
          {
            date: "10/01/2025",
            hourly_recordings: [
              {
                time: "06:00 - 08:00",
                streaming_url: "https://example.com/garagecam1.m3u8",
              },
              {
                time: "14:00 - 16:00",
                streaming_url: "https://example.com/garagecam2.m3u8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const liveStreamList = {
  cameras: [
    {
      camera_id: "1",
      camera_name: "Stream 1",
      streaming_url:
        "https://diceyk6a7voy4.cloudfront.net/e78752a1-2e83-43fa-85ae-3d508be29366/hls/fitfest-sample-1_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.0Mbps_qvbr.m3u8",
    },
    {
      camera_id: "2",
      camera_name: "Stream 2",
      streaming_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
    {
      camera_id: "3",
      camera_name: "Stream 3",
      streaming_url:
      "https://stream-fastly.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8",
    },
    {
      camera_id: "4",
      camera_name: "Stream 4",
      streaming_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      // streaming_url: "https://example.com/stream2.m3u8",
    },
    {
      camera_id: "5",
      camera_name: "Stream 5",
      streaming_url: "https://example.com/stream1.m3u8",
    },
    {
      camera_id: "6",
      camera_name: "Stream 6",
      streaming_url:
        "https://res.cloudinary.com/dannykeane/video/upload/sp_full_hd/q_80:qmax_90,ac_none/v1/dk-memoji-dark.m3u8",
    },
    {
      camera_id: "7",
      camera_name: "Stream 7",
      streaming_url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
    {
      camera_id: "8",
      camera_name: "Stream 8",
      streaming_url: "https://example.com/frontcam2.m3u8",
    },
    {
      camera_id: "9",
      camera_name: "Stream 9",
      streaming_url: "https://example.com/frontcam1.m3u8",
    },
    {
      camera_id: "10",
      camera_name: "Stream 10",
      streaming_url:
        "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
    },
    {
      camera_id: "11",
      camera_name: "Stream 11",
      streaming_url: "https://example.com/sidecam1.m3u8",
    },
    {
      camera_id: "12",
      camera_name: "Stream 12",
      streaming_url: "https://example.com/sidecam2.m3u8",
    },
    {
      camera_id: "13",
      camera_name: "Stream 13",
      streaming_url: "http://cdn-fms.rbs.com.br/vod/hls_sample1_manifest.m3u8",
    },
    {
      camera_id: "14",
      camera_name: "Stream 14",
      streaming_url:
        "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
    },
    {
      camera_id: "15",
      camera_name: "Stream 15",
      streaming_url: "https://example.com/backyardcam2.m3u8",
    },
    {
      camera_id: "16",
      camera_name: "Stream 16",
      streaming_url: "https://example.com/backyardcam1.m3u8",
    },
  ],
};

