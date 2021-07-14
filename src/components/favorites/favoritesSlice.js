import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [
      {
        subreddit: "funny",
        icon_img:
          "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      },
      {
        subreddit: "javascript",
        icon_img:
          "https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png",
      },
      {
        subreddit: "Music",
        icon_img:
          "https://b.thumbs.redditmedia.com/UO8Hj8ZnQmYGeE9ZIjKPQEwlX46OBPC_kj2Jqlt5nqo.png",
      },
      {
        subreddit: "news",
        icon_img:
          "https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png",
      },
      {
        subreddit: "pics",
        icon_img:
          "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png",
      },
      {
        subreddit: "reactjs",
        icon_img:
          "https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png?width=256&s=13a87a036836ce95570a76feb53f27e61717ad1b",
      },
      {
        subreddit: "science",
        icon_img:
          "https://styles.redditmedia.com/t5_mouw/styles/communityIcon_xtjipkhhefi41.png?width=256&s=23dbd8fcbd7c632995ddc63929abe0c2ce3b8b4d",
      },
      {
        subreddit: "technology",
        icon_img:
          "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
      },
      {
        subreddit: "tennis",
        icon_img:
          "https://styles.redditmedia.com/t5_2qiq1/styles/communityIcon_dwmyh6nx1n821.png?width=256&s=40e1f746bbbe6edbc3da2ea5b1419fa687322c13",
      },
      {
        subreddit: "webdev",
        icon_img:
          "https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_5ey8lzmwmxp21.png?width=256&s=5a85d5c682f40e3cf317c560b219585ac0afce78",
      },
    ],
  },
  reducers: {},
});

export const selectFavorites = (state) => state.favorites.favorites;
export default favoritesSlice.reducer;

// export const getFavorites = createAsyncThunk(async (favorite) => {
//   const subreddit = favorite[subreddit];
//   const data = await fetch(`https://reddit.com/r/${subreddit}`);
//   const json = await data.json();
//   return json;
// });
