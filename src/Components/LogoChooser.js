import React from 'react'




function LogoChooser(props) {
    const{type}=props;
  return (
   <div className=' flex justify-center'>
   {
    type==="react"?
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
    </svg>
    

    :
    type==="node"?
    <svg width="25" height="25" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9919 42C17.4521 42 16.9042 41.85 16.4288 41.5666L11.4575 38.5247C10.7162 38.0913 11.0788 37.9413 11.3205 37.8579C12.3115 37.4996 12.513 37.4245 13.5685 36.7995C13.6813 36.7328 13.8263 36.7578 13.9391 36.8328L17.7583 39.1747C17.8953 39.2581 18.0886 39.2581 18.2175 39.1747L33.0994 30.2905C33.2363 30.2072 33.325 30.0405 33.325 29.8738V12.1054C33.325 11.9304 33.2363 11.772 33.0913 11.6803L18.2175 2.80445C18.0806 2.7211 17.8953 2.7211 17.7583 2.80445L2.89257 11.6887C2.74754 11.772 2.65891 11.9387 2.65891 12.1137V29.8738C2.65891 30.0405 2.74754 30.2072 2.89257 30.2822L6.96956 32.7157C9.18532 33.8575 10.5389 32.5157 10.5389 31.1573V13.6222C10.5389 13.3722 10.7323 13.1805 10.974 13.1805H12.8594C13.0931 13.1805 13.2945 13.3722 13.2945 13.6222V31.1656C13.2945 34.2159 11.6831 35.9661 8.8872 35.9661C8.02507 35.9661 7.34825 35.9661 5.46285 34.9993L1.56312 32.6741C0.59624 32.099 0 31.0239 0 29.8655V12.1054C0 10.9553 0.59624 9.87181 1.56312 9.29675L16.4288 0.412541C17.3715 -0.137514 18.6204 -0.137514 19.5551 0.412541L34.4369 9.30509C35.4038 9.88015 36 10.9553 36 12.1137V29.8738C36 31.0239 35.4038 32.099 34.4369 32.6824L19.5551 41.5666C19.0797 41.85 18.5398 42 17.9919 42ZM30.0054 24.4899C30.0054 21.1646 27.8299 20.2812 23.2614 19.6561C18.6365 19.0227 18.1692 18.6977 18.1692 17.5809C18.1692 16.6558 18.564 15.4224 21.9884 15.4224C25.0421 15.4224 26.1701 16.1058 26.6374 18.2393C26.6777 18.4393 26.855 18.5893 27.0564 18.5893H28.9902C29.111 18.5893 29.2238 18.5393 29.3044 18.4477C29.385 18.356 29.4252 18.231 29.4172 18.106C29.1191 14.4306 26.7583 12.7221 21.9884 12.7221C17.7422 12.7221 15.2122 14.5723 15.2122 17.6809C15.2122 21.0479 17.7341 21.9813 21.803 22.3981C26.6777 22.8898 27.0564 23.6315 27.0564 24.6233C27.0564 26.3401 25.7189 27.0735 22.5846 27.0735C18.6446 27.0735 17.7825 26.0484 17.4924 24.0232C17.4602 23.8065 17.2829 23.6482 17.0654 23.6482H15.1397C14.8979 23.6482 14.7126 23.8482 14.7126 24.0899C14.7126 26.6818 16.0743 29.7738 22.5927 29.7738C27.2981 29.7655 30.0054 27.8403 30.0054 24.4899Z" fill="black"/>
</svg>

    :
    type==="c++"?
<svg  width="25" height="25" viewBox="0 0 306 344.35" >
<path fill="black" d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175  L302.107,258.262z"/>
<path fill="black" d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263  c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"/>
<path fill="black" d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0  L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"/>
<g>
	<path fill="#FFFFFF" d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968   l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51   c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"/>
</g>
<g>
	<polygon fill="#FFFFFF" points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508    221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841  "/>
</g>
<g>
	<polygon fill="#FFFFFF" points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508    263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841  "/>
</g>
</svg>

    :
    type==="css"?
    <svg width="25" height="25" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34 0L29.4667 26.2857L13.6496 32L0 26.2857L1.38833 19.5143H7.19667L6.63 22.4143L14.875 25.5857L24.3738 22.4143L25.7054 15.4786H2.08958L3.22292 9.62143H26.86L27.6038 5.85714H3.98792L5.1425 0H34Z" fill="black"/>
</svg>

    :
    type==="html"?
    <svg width="25" height="25" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L3.27188 37.1062L17.9531 42L32.7281 37.1062L36 0H0ZM28.8938 11.9906H11.6625L12.0469 16.6219H28.5094L27.2344 30.5344L18.0563 33.0656V33.0938H17.9531L8.7 30.5344L8.1375 23.4281H12.6094L12.9375 27L17.9531 28.3594L22.9875 27L23.55 21.1687H7.90313L6.70312 7.51875H29.3063L28.8938 11.9906Z" fill="black"/>
</svg>

    :
    type==="figma"?
    <svg width="25" height="25" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7.85797C0 3.51813 3.37363 0 7.53525 0H20.4647C24.6264 0 28 3.51813 28 7.85797C28 10.606 26.6473 13.0246 24.5984 14.4291C26.6473 15.8336 28 18.2521 28 21.0002C28 25.34 24.6264 28.8582 20.4647 28.8582H20.3011C18.3502 28.8582 16.5723 28.085 15.2341 26.8163V34.0567C15.2341 38.4544 11.7723 42 7.57584 42C3.42463 42 0 38.4926 0 34.142C0 31.3941 1.35255 28.9757 3.40128 27.5711C1.35255 26.1666 0 23.748 0 21.0002C0 18.2521 1.35267 15.8336 3.40153 14.4291C1.35267 13.0246 0 10.606 0 7.85797ZM12.7659 15.7161H7.53525C4.7368 15.7161 2.46824 18.0819 2.46824 21.0002C2.46824 23.9072 4.7193 26.2659 7.50285 26.2841C7.51362 26.284 7.5244 26.284 7.53525 26.284H12.7659V15.7161ZM15.2341 21.0002C15.2341 23.9184 17.5027 26.2842 20.3011 26.2842H20.4647C23.2632 26.2842 25.5317 23.9184 25.5317 21.0002C25.5317 18.0819 23.2632 15.7161 20.4647 15.7161H20.3011C17.5027 15.7161 15.2341 18.0819 15.2341 21.0002ZM7.53525 28.8582C7.5244 28.8582 7.51362 28.8581 7.50285 28.8581C4.7193 28.8762 2.46824 31.235 2.46824 34.142C2.46824 37.0496 4.7671 39.426 7.57584 39.426C10.4299 39.426 12.7659 37.0114 12.7659 34.0567V28.8582H7.53525ZM7.53525 2.57396C4.7368 2.57396 2.46824 4.9397 2.46824 7.85797C2.46824 10.7763 4.7368 13.142 7.53525 13.142H12.7659V2.57396H7.53525ZM15.2341 13.142H20.4647C23.2632 13.142 25.5317 10.7763 25.5317 7.85797C25.5317 4.9397 23.2632 2.57396 20.4647 2.57396H15.2341V13.142Z" fill="black"/>
</svg>

    :
    type==="python"?
    <svg  width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.34 13.5398C34.7213 11.0569 33.5481 9.18461 31.0491 9.18461H27.8269V12.9934C27.8269 15.9505 25.3198 18.4414 22.4592 18.4414H13.8773C11.5309 18.4414 9.58636 20.4503 9.58636 22.8047V30.9848C9.58636 33.315 11.6113 34.6811 13.8773 35.348C16.5933 36.1435 19.2048 36.2882 22.4592 35.348C24.6207 34.7212 26.7501 33.4597 26.7501 30.9848V27.7143H18.1763V26.6215H31.0491C33.5481 26.6215 34.4722 24.8778 35.34 22.2663C36.24 19.5744 36.1998 16.987 35.34 13.5398ZM22.9975 29.8919C23.8895 29.8919 24.6127 30.6232 24.6127 31.5231C24.6127 32.4311 23.8895 33.1624 22.9975 33.1624C22.1136 33.1624 21.3824 32.4231 21.3824 31.5231C21.3905 30.6151 22.1136 29.8919 22.9975 29.8919ZM13.4836 17.3647H22.0654C24.452 17.3647 26.3564 15.396 26.3564 13.0014V4.81333C26.3564 2.48305 24.3957 0.739364 22.0654 0.345628C19.1887 -0.128463 16.0629 -0.104357 13.4836 0.353663C9.85153 0.996499 9.19262 2.33842 9.19262 4.82137V8.09179H17.7825V9.18461H5.97041C3.47138 9.18461 1.28573 10.6872 0.60272 13.5398C-0.184755 16.8102 -0.216897 18.8512 0.60272 22.2663C1.21341 24.8055 2.66783 26.6215 5.16686 26.6215H8.11587V22.7002C8.11587 19.8637 10.5667 17.3647 13.4836 17.3647ZM12.9452 5.90615C12.0532 5.90615 11.3301 5.17493 11.3301 4.27496C11.3381 3.36695 12.0532 2.63573 12.9452 2.63573C13.8291 2.63573 14.5603 3.37499 14.5603 4.27496C14.5603 5.17493 13.8371 5.90615 12.9452 5.90615Z" fill="black"/>
</svg>

    :
    type==="java"?
    <svg width="25" height="25" viewBox="0 0 37 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9336 30.5562C27.8942 29.9019 29.2272 29.3356 29.2272 29.3356C29.2272 29.3356 25.434 30.0191 21.6603 30.3316C17.0437 30.7125 12.084 30.7906 9.59436 30.4586C3.70352 29.6773 12.8289 27.5192 12.8289 27.5192C12.8289 27.5192 9.29051 27.2848 4.92874 29.3746C-0.217172 31.855 17.671 32.9878 26.9336 30.5562ZM18.5629 27.4215C16.7006 23.2516 10.4177 19.5896 18.5629 13.1834C28.7234 5.19524 23.5128 0 23.5128 0C25.6202 8.25184 16.1027 10.7518 12.6623 15.8787C10.3197 19.3845 13.8091 23.1442 18.5629 27.4215ZM29.7957 10.2147C29.8055 10.2147 12.6231 14.492 20.8271 23.9059C23.2482 26.6793 20.19 29.1793 20.19 29.1793C20.19 29.1793 26.3357 26.0153 23.5128 22.0603C20.8762 18.3689 18.857 16.533 29.7957 10.2147ZM29.1978 36.6304C29.1443 36.7234 29.0783 36.8088 29.0018 36.8843C41.5774 33.5933 36.951 25.2731 30.9425 27.3825C30.618 27.5013 30.3376 27.7159 30.1388 27.9977C30.4897 27.8712 30.8502 27.7732 31.217 27.7047C34.2555 27.07 38.6173 31.7574 29.1978 36.6304ZM33.8203 42.7143C33.8203 42.7143 35.2416 43.8764 32.2618 44.7846C26.5866 46.4935 8.65928 47.0111 3.68 44.8529C1.88628 44.0814 5.24827 42.9975 6.30686 42.7729C7.40465 42.5385 8.04177 42.5776 8.04177 42.5776C6.05202 41.1811 -4.82791 45.3217 2.51359 46.5033C22.5326 49.7454 39.0152 45.0482 33.8203 42.7143ZM11.9076 38.6714C4.19361 40.8198 16.6026 45.2533 26.4239 41.0639C25.4661 40.6932 24.5414 40.2423 23.6598 39.7163C19.2785 40.5463 17.2495 40.6049 13.27 40.1557C9.98643 39.7846 11.9076 38.6714 11.9076 38.6714ZM29.5311 48.1634C21.8171 49.6087 12.2996 49.4427 6.66364 48.515C6.66364 48.5052 7.82025 49.4622 13.7601 49.8431C22.7973 50.4193 36.6765 49.5208 37 45.2631C37 45.2631 36.3727 46.8744 29.5311 48.1634ZM25.2575 34.4722C19.4549 35.5855 16.0929 35.5562 11.8488 35.1167C8.56518 34.7749 10.7118 33.1929 10.7118 33.1929C2.20386 36.0054 15.4362 39.1889 27.3257 35.7222C26.5573 35.4519 25.8532 35.0263 25.2575 34.4722Z" fill="black"/>
</svg>

    :
    type==="dbms"?
    <svg width="25" height="25" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 6.5625V10.5C36 14.1258 27.9402 17.0625 18 17.0625C8.05982 17.0625 0 14.1258 0 10.5V6.5625C0 2.93672 8.05982 0 18 0C27.9402 0 36 2.93672 36 6.5625ZM31.5964 17.6121C33.2679 17.0051 34.8027 16.2258 36 15.266V23.625C36 27.2508 27.9402 30.1875 18 30.1875C8.05982 30.1875 0 27.2508 0 23.625V15.266C1.19732 16.234 2.73214 17.0051 4.40357 17.6121C8.01161 18.9246 12.817 19.6875 18 19.6875C23.183 19.6875 27.9884 18.9246 31.5964 17.6121ZM0 28.391C1.19732 29.359 2.73214 30.1301 4.40357 30.7371C8.01161 32.0496 12.817 32.8125 18 32.8125C23.183 32.8125 27.9884 32.0496 31.5964 30.7371C33.2679 30.1301 34.8027 29.3508 36 28.391V35.4375C36 39.0633 27.9402 42 18 42C8.05982 42 0 39.0633 0 35.4375V28.391Z" fill="black"/>
</svg>

    :
    type==="illustrator"?
    <svg width="25" height="25"  viewBox="0 0 240 234">
  <path fill="white" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"/>
  <path fill="black" d="M116 140H78.8l-7.6 23.5c-.2.9-1 1.5-1.9 1.4H50.5c-1.1 0-1.4-.6-1.1-1.8l32.2-92.7c.3-1 .6-2.1 1-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1h25.9c.8 0 1.2.3 1.3.8l36.5 103c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1L116 140zm-31.4-20.3H110c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-.8-2.8-1.5-5.4-2.2-7.8H97c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.4 5.1-2.9 9.8-4.4 14zM170 77c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4 1.2-6.6 3.6-8.9s5.6-3.5 8.9-3.5c3.9 0 6.9 1.2 9.1 3.5 2.2 2.4 3.4 5.6 3.3 8.9.1 3.4-1.1 6.7-3.5 9.2-2.3 2.4-5.7 3.7-9.1 3.5zm-11.2 86.8v-77c0-1 .4-1.4 1.3-1.4h19.8c.9 0 1.3.5 1.3 1.4v77c0 1.1-.4 1.6-1.3 1.6h-19.6c-1 0-1.5-.6-1.5-1.6z"/>
   </svg>:
    type==="xd"?
    <svg width="25" height="25" viewBox="0 0 240 234" >
<g>
	<rect x="10" y="10" fill-rule="evenodd" fill="black" width="250" height="254"/>
</g>
<g>
	<path fill-rule="evenodd" fill="white" d="M0,0v234h240V0H0z M10,10h220v214H10V10z"/>
</g>
<path fill="white" d="M174.3,98.3c-1.5-0.7-3.4-1-5.8-1c-12.6,0-21,9.7-21,25.8c0,18.4,8.6,25.8,19.8,25.8c2.4,0,5-0.3,6.9-1.1  V98.3z M129.5,123.9c0-23.3,15-41.5,39.6-41.5c2.1,0,3.2,0,5.2,0.2v-26c0-0.6,0.5-1,1-1h16.1c0.8,0,1,0.3,1,0.8v91.4  c0,2.7,0,6.1,0.5,9.8c0,0.7,0,0.8-0.6,1.1c-8.4,4-17.2,5.8-25.6,5.8C145,164.5,129.5,151.1,129.5,123.9z M95.4,107.7l28,54.3  c0.5,0.8,0.2,1.6-0.6,1.6h-17.4c-1.1,0-1.6-0.3-2.1-1.3c-6.4-13.2-12.9-26.9-19.6-41.1h-0.2c-6,13.4-12.6,28-19,41.2  c-0.5,0.8-1,1.1-1.8,1.1H46.1c-1,0-1.1-0.8-0.6-1.4l27.4-52.7L46.4,57c-0.6-0.8,0-1.5,0.7-1.5h17.2c1,0,1.5,0.2,1.8,1.1  C72.4,69.9,78.8,83,84.8,96.4h0.2c5.8-13.2,12.2-26.5,18.3-39.6c0.5-0.8,0.8-1.3,1.8-1.3h16.1c0.8,0,1.1,0.6,0.6,1.5L95.4,107.7z"/>
</svg>
    :
 type==="uiux"?
 <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M751-596 596-751l70-70q17-17 42-17t42 17l71 71q17 17 17 42t-17 42l-70 70ZM120-120v-156l194-194L93-692l174-176 223 223 106-106 155 155-106 106 223 223L693-94 471-315 276-120H120Zm237-393 90-90-73-73-48 48-42-42 48-48-64-64-90 90 179 179Zm334 335 90-90-64-64-48 48-42-42 48-48-73-73-90 90 179 179Zm-511-2h70l415-415-70-70-415 415v70Z"/></svg>   
   : null

   }
   </div>
  )
}

export default LogoChooser