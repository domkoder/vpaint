function Canvas3({onGetActiveWallClass, activeWall}) {
  let wallOne;
  let wallTwo;
  let shadow = {
    zIndex: "2",
    display:"none"
  }

  wallOne ={
    fill: activeWall.wallOne.color
  }

  wallTwo = {
    fill: activeWall.wallTwo.color
  }

  if (activeWall.light) {
    shadow = {
      zIndex: "2",
      display:"block"
    }
  }

  return (
    <div className="canvas">
      <img style={shadow} className="canvas__image canvas__image-3" src="/img/shadow-image3.png" alt="shadow-image3" />

      <div className="p-relative canvas__image canvas__image-3 ">
        <svg className="main-wall" width="566" height="447" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path style={wallOne} className="wallOne" onClick={(e)=>{onGetActiveWallClass(e.target.getAttribute('class'))}} fill-rule="evenodd" clip-rule="evenodd" d="M.086.994c.744.233 19.59 5.412 28.92 7.972V40.39l87.46 23.45.522 63.109-26.199-5.431c1.642-1.244 4.978-4.583 5.25-8.037.153-1.958-.255-6.357-1.167-7.822-2.72-4.372-8.832-8.23-16.178-9.668-9.182-1.797-18.935-3.074-24.194 3.012-4.768 5.518-1.235 12.322 1.36 15.274l-27.453-5.69v22.049l88.943 16.787-.612 258.805-11.771.953-2.557-2.296-3.132-2.583-2.165-2.297-2.192-3.392a.663.663 0 00-.94 0c-.396.355-1.243 1.366-1.617 1.827l-1.28 1.357-3.757-3.184c-.878-.548-2.656-1.665-2.74-1.748a3.518 3.518 0 00-.358-.243l-.001-.001c-.272-.172-.6-.381-.632-.461-.023-.058-.288-.481-.592-.965v-.002l-.001-.001c-.38-.606-.82-1.308-.92-1.511-.183-.365-.627-.835-1.383-.6-.606.188-1.036 1.105-1.175 1.54l-1.07 2.818-1.242 2.838-1.945 5.389-1.435 4.815-.446 1.658-6.768.223-8.43.564c-2.346.166-7.197.551-7.834.763-.637.213-3.563.974-4.946 1.328l-19.127 1.525v29.312L.08 446.99.086.994zm33.77 169.863l1.12-.947 70.431 10.52v164.761l-.737.737-69.537 1.421h-1.21l-.068-176.492z" fill="transparent"/>
        
        <path  style={wallOne} className="wallOne" onClick={(e)=>{onGetActiveWallClass(e.target.getAttribute('class'))}}  d="M427.926 137.728l-.859 41.201-.615 15.107 138.808-35.388V29.825l-87.237 39.15 8.854 3.523c.171.277.44.897.15 1.153-.29.256-31.193 27.873-46.607 41.65h1.523l96.903-22.714 2.715 8v1.714l-86.505 19.112h6.414l61.536 1.986c.248.235.67.753.372.952-.298.199-4.372 5.132-6.373 7.573l-78.544-1.903.29.62 21.045 15.509c.137.187.329.63 0 .913-.33.282-7.456 3.316-10.978 4.797l-20.892-14.132zM406.592 117.674l.174.008c.082-.067.154-.121.21-.159l-11.454-11.524-15.101 6.777-9.354-2.359-8.192 3.734 37.554 6.142 6.163-2.619zM304.014 113.955l37.732 9.826 16.027-7.305-.169.079 35.448 5.977 1.186.386-16.002 6.323-53.922 7.46c-2.354-1.325-4.598-1.896-6.157-1.896-8.034-.803-12.36 5.793-12.36 13.967 1.813 12.769 7.897 17.425 13.151 19.119l-15.036-2.979.102-50.957z" fill="transparent"/>
        
        <path  style={wallOne} className="wallOne" onClick={(e)=>{onGetActiveWallClass(e.target.getAttribute('class'))}}  fill-rule="evenodd" clip-rule="evenodd" d="M325.882 168.856a28.53 28.53 0 01-2.577-.102l37.745 7.479v5.209l-19.226 6.122-37.945-6.118-.369 184.114c-6.705.402-20.211 1.206-20.59 1.206-.379 0-.338 17.688-.271 26.533h2.963v-1.108h3.049v-.804l1.995-1.413c1.05-.832 3.185-2.511 3.325-2.577.141-.067.426-.514.551-.729.136-.325.531-1.108 1.02-1.64.49-.531 1.807-.758 2.404-.804.046-.312.068-1.027-.204-1.398-.34-.462-1.361.198-1.769.463-.326.213-1.587.408-2.177.479.749-.56 2.585-1.753 3.946-2.043 1.615-.345 2.903.63 3.67 1.21l.008.006.109.083c.599.449 2.517.47 3.402.424l.389.32c-.709.861-2.132 2.685-2.156 3.098-.027.455.962-.235 1.279-.457l.038-.026.049-.033c.098-.061 1.681-1.2 2.46-1.762l2.035-1.762 2.749-2.141 2.475-1.488 2.749-.258.41.258h1.777l2.52.198c.441.749 1.331 2.268 1.367 2.353.046.107.592 1.397.213 1.564-.38.167-1.291-.167-1.58-.288-.23-.097-4.398-.415-6.454-.562l-.835.683-4.313 1.079v.804c0 .085 3.625.127 5.437.137.182-.02.729.018 1.458.334s2.04 2.501 2.604 3.554v.528l10.552-.795 3.85-9.991c.819-.199 3.16-.578 5.975-.498 2.815.08 5.089.653 5.875.929l3.205 10.027 16.996 2.88v5.881h-.568v7.099l4.542.73 4.591-.275-.133-1.662 2.489-251.582-.379.06c-.185-.265-.498-.816-.277-.899.022-.008.255-.16.669-.434l.15-15.201h-3.827v-3.533l-45.909 6.566c3.351 2.89 6.412 7.49 7.491 14.338 0 13.843-4.551 15.635-9.022 15.635zm8.968 45.157l-30.952-4.428-.19 131.759 30.904-.381.238-126.95z" fill="transparent"/>
        
        <path  style={wallOne} className="wallOne" onClick={(e)=>{onGetActiveWallClass(e.target.getAttribute('class'))}} d="M463.906 75.31l-40.774 18.298v4.098h.517l2.671 5.264c1.22.049 3.894.229 4.824.56.93.33 1.737.654 2.025.775l30.737-28.995zM405.691 101.435l13.849-6.215v2.486l-.92.586-3.035 5.651c-.656.132-2.123.435-2.742.586-.62.151-2.337.844-3.118 1.172l-.345-.366-3.689-3.9z" fill="transparent"/></svg>

        <svg className="tv-side" width="189" height="362" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="wallTwo" onClick={(e)=>{onGetActiveWallClass(e.target.getAttribute('class'))}} style={wallTwo}fill-rule="evenodd" clip-rule="evenodd" d="M.653 18.861L15.867.6 188.11 50.623l-.572 269.969-20.787 1.151-139.731 7.203-.389 3.19-.474 28.497h-.95c-.752-.317-2.434-.95-3.147-.95-.712 0-11.735.633-17.157.95l-4.156.594.417-259.021 12.263-9.669v-7.94L1.164 82.24.654 18.86zm41.048 278.246l-.583-.628.627-94.698.538-.314 140.309 12.573-.276 81.158-140.615 1.909z" fill="transparent"/></svg>
      </div>
      <img className="canvas__image canvas__image-3" src="/img/main-image3.png" alt="main-image3" />
    </div>
  )
}

export default Canvas3