const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUW5OiOBT+L3nVGkFExKquWgRUVBRvCG7NQ4QIkXsSQJzyv29hT0/Pw+5UL08hSZ1857ucHyDNMEVL1IDxD5ATXEGG2iVrcgTGYFJer4iALvAhg2AMuLmeGorO7Wp75EcbIQsGmhUnooPtrba9o9k146PIr6dR/QaeXZCXlxh7fyg4SxVjhQJ63JidCN6EIBc8VV4VA0G621PcmPO9IeWars2CN/BsK0JMcBroeYgSRGC8RI0FMfka/Jl5WRh2fsId8z5Pj+u+gpLACBdGalHHnOX31WxyGtzgyTG/Bn9pbyxWWndcZevHoZCT2W66bGKnFobRpXZKaFVH5TJruMZ7h09xkCLf8FHKMGu+zLtqznNyXY/OQ32oWsn+NIfHxehG19twaz+OG15+mFZnXkon5WvAe5OSbrigZ8mT006TpeO+njzYSFlsTnpkl7CSrEO9k3iR2/4O3CIfXon+D++ueZe94qTK8SVEqNP3Tv2mGLgjdb6zz51kGvFu1Cnobae7X4Ov6dRXY7tTiAHsiXlxjPcHVfDQZane0nmx97M55qOoj7XoEz5kJfkTSnnmBsYpoNv7IsTL3SWdSPOwWE/co3RotF0vtLbxga+mLukfOGfCn0xysCKjo5KVghvsbMMk2JSl4zzmZ2mw3mfGwlOUt1dHEWoMH4z5ZxcQFGDKCGQ4S197nNwF0K/2yCOIvegFYWMIlFYP85GfDjPD61dk2rPz27S4iem94iNpaFs4lq3q+Aa6ICeZhyhF/hxTlpHGRJTCAFEw/vt7F6Tozt6Fa58T+C64YkLZMS3zOIP+h6ofh9DzsjJl+yb11HaBCBhzn9uIMZwGtOWxTCHxQlwhNYSMgvEVxhT96hAR5IMxIyX6lVo181viz8Od7Rx5C3RB8hIE+2AM+n2REzlOGnGiPBhL4l/0W93WhXn+LUUMdEH8usfzvCgKI0kQuaHIvW62B89fENuKPmIQx7SNzmZjRFI90Q04lWV9NlOCQFEDBXy29OGNd+7VbLiXNAtytzCfP7hau/Vtjun2jT6kax6jPo0XAR+S6zZ6+5ci7VToHXJ22LnJ9GqO4O3Ro9r9qOi31a6ocWbhVcyKzFbSfd5zt+fSdYVwu/ZUu9le8ErKZlJ2tYL7hpx3ThUGvCEmTjAJ3trXfFRhD/3+mJCcBssHgtCutZ4oGNNaK+iqYE56uaT6kpKmDPfKYp6uFx5/nj6KSy1715m3VI5LP5Pc+yAQ0pOgV+LZrnOUOZNY1Lbvrn2lJv45rfDLT61Y7e8Vo1f4U9hK+AXx3pG3JuOe3d+K/Jwn/5HJybbYRGX96DNjAHcj2VQGcuyvdlNXMjvC8Owwsti7axcK3AI8n9+7II8hu2YkAWMAU59k2AddQLKyda2RXrM/TVmFM1QlUNvWY0iZ8pmEA04QZTDJwZiXRv2B0B9wfBckjZLnewbZR4CA0n4bXgHPfwA8szpoXAcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
