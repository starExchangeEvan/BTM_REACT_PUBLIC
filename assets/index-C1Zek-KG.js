import{c as t,h as p,l as s,d as l,r as x,j as r,u as y,I as w,M as v,f as m,a as k}from"./index-D8ZF-SPa.js";import{C as u,R as g,S as j}from"./index-CgAahDbo.js";l.div`
  min-height: 100px;

  .category-box-header {
    background-image: ${`linear-gradient(180deg,${t.buttonGray},${t.white})`};
    color: ${t.themeBlack};
    font-size: 18px;
    position: relative;
    text-align: ${e=>e.$headerTextAlign};
    z-index: 1;

    ${e=>{switch(e.$themeCategory){case"circle":return s`
            border-radius: 18px;
          `;default:return s`
            border-radius: 15px 15px 0 0;
          `}}}
  }
  .category-box-body {
    box-shadow: ${e=>e.$isShowBorder&&`
    inset -5px 0px 5px ${p(t.white,.5)},
      inset 5px 0px 5px ${p(t.white,.5)},
      inset 0px -5px 5px ${p(t.white,.5)}; 
    `};
    background: ${e=>e.$isShowBorder?e.$background||"transparent":e.$background||`linear-gradient(180deg, #252e3d,${p(t.themeBlack,.3)})`};
    border-radius: 0 0 15px 15px;
    color: ${t.white};
    position: relative;
    z-index: 0;
    ${e=>{if(e.$themeCategory==="circle")return s`
          top: -20px;
          padding-top: 40px;
        `}}
  }
`;const b=s`
  --ant-color-primary: #1890ff;

  &.ant-checkbox-wrapper,
  .ant-checkbox-wrapper {
    &:hover {
      .ant-checkbox-inner {
        --ant-color-border: ${t.darkGray};
        border-color: ${t.darkGray};
      }
    }
    .ant-checkbox-inner {
      --ant-color-border: ${e=>e.$isInvalid?t.alertRed:t.darkGray};
    }
  }
`,G=l(u)`
  ${b}
`,N=l(u.Group)`
  ${b}
`,C=x.forwardRef(({className:e,children:a,checkboxAttr:n,errorMessage:i,isInvalid:o,...d},c)=>r.jsxs(r.Fragment,{children:[r.jsx(G,{...n,...d,className:`styled-container-checkbox ${e??""}`,ref:c,$isInvalid:o,children:a}),o&&r.jsx("div",{className:"ant-form-item-explain-error",children:i})]}));C.Group=x.forwardRef(({className:e,children:a,checkboxGroupAttr:n,...i},o)=>r.jsx(N,{...n,...i,className:`styled-container-checkbox-group ${e}`,ref:o,children:a}));l.div`
  &.type-read {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .ant-image-img {
      height: auto !important;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 5px;
    }
  }
  .ant-image {
    background-color: ${t.inputGray};
    border-radius: 8px;
    padding: 4px;
  }
  .ant-image-mask {
    border-radius: 8px;
  }
  .ant-upload-list {
    --ant-padding-xs: 4px;

    .ant-upload-list-item-container {
      width: ${e=>typeof e.$imageWidth=="number"?`${e.$imageWidth}px`:e.$imageWidth??" 36px"} !important;
      height: ${e=>typeof e.$imageHeight=="number"?`${e.$imageHeight}px`:e.$imageHeight??" 36px"} !important;

      .ant-upload-list-item {
        background-color: ${t.inputGray};

        .ant-upload-list-item-actions {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          > a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        button {
          &.ant-btn {
            position: absolute;
            top: -8px;
            right: -8px;
            ${e=>{if(e.$type==="edit")return s`
                  &:hover {
                    --ant-button-text-hover-bg: transparent;
                    --ant-color-bg-text-active: transparent;
                  }
                  &::before {
                    content: "x";
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 16px;
                    height: 16px;
                    background-color: #ffffff;
                    position: absolute;
                    top: 2px;
                    right: 4px;
                    border-radius: 50%;
                    color: #444;
                    box-shadow: 0px 1px 5px ${t.darkGray};
                  }
                `}}
          }
        }
      }
    }
    .ant-upload {
      &.ant-upload-select {
        --ant-control-height-lg: 15px;
        border-style: hidden !important;
      }
      .btn-upload {
        display: inline-flex;
        width: 36px;
        height: 36px;
        justify-content: center;
        align-items: center;
        background-color: ${e=>e.$fileListLength>0?t.darkGray:t.inputGray};
        border-radius: 8px;

        &:hover {
          background-color: ${t.buttonGray};
        }
      }
    }
  }
`;l.div`
  display: inline-block;

  .container {
    text-align: center;
    width: 113px;
    display: inline-block;
  }
  .circle {
    width: 113px;
    height: 113px;
    border: solid 5px
      ${e=>e.$textColor===t.lightBlue?"#f3f3f3":e.$textColor||"#f3f3f3"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    font-size: 28px;
    color: ${e=>e.$textColor||t.lightBlue};
  }
  .title {
    font-size: 16px;
    margin-top: 20px;
    display: block;
    color: ${t.white};
  }
`;const R=l.div`
  color: ${t.white};
  position: relative;
  background: ${e=>{if(typeof e?.$bgColorLinearGradient=="boolean")return e?.$bgColorLinearGradient===!0?"linear-gradient(to bottom,#38404e 200px, transparent 0)":"transparent";if(e?.$bgColorLinearGradient?.constructor===Object)return`linear-gradient(to ${e?.$bgColorLinearGradient?.direction||"bottom"}, ${e?.$bgColorLinearGradient?.startColor||"#38404e"} ${e?.$bgColorLinearGradient?.startRange||"200px"}, ${e?.$bgColorLinearGradient?.endColor||"transparent"} ${e?.$bgColorLinearGradient?.endRange||"0"})`}};
  .icon-back {
    position: absolute;
    top: -10px;
    left: 0;
    cursor: pointer;
  }
  .header {
    background-color: #d9d9d9;
    width: 485px;
    height: 36px;
    position: relative;
    text-align: center;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 36px 36px 0 0;
      border-color: #d9d9d9 transparent transparent transparent;
      position: absolute;
      right: -36px;
      top: 0;
      z-index: 1;
    }
    .header-title {
      color: ${t.white};
      background-color: ${p(t.blueGray,.5)};
      height: 50px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-36px, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      min-width: 320px;

      &::before,
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        z-index: 1;
        top: 0;
      }
      &::before {
        border-width: 0 40px 50px 0;
        border-color: transparent transparent ${p(t.blueGray,.5)}
          transparent;
        position: absolute;
        left: -40px;
        transform: rotate(180deg);
      }
      &::after {
        border-width: 0 40px 50px 0;
        border-color: transparent transparent ${p(t.blueGray,.5)}
          transparent;
        position: absolute;
        right: -40px;
      }
    }
  }
`;function z(e,a){typeof a=="function"?a():e(-1)}function S({backSetting:e={isVisible:!1,onClick:()=>{}},bgColorLinearGradient:a,className:n,children:i,headerTitle:o,headerStyle:d}){const c=y();return r.jsxs(R,{className:`styled-container-page-box ${a?"":"pd-x-20"} ${n??""}`,$bgColorLinearGradient:a,children:[e.isVisible&&r.jsx(w,{className:"icon-back",color:t.white,fontSize:30,icon:"humbleicons:arrow-go-back",onClick:()=>z(c,e.onClick)}),r.jsx("div",{className:"header mg-l-20-minus mg-t-25",style:{minWidth:"514px",...d},children:o&&r.jsx("h2",{className:"header-title pd-y-3 pd-x-20 mg-y-0 ",children:o})}),r.jsx("div",{className:"page-box-body mt-3",children:r.jsx("div",{className:"mt-3",children:i})})]})}const $=s`
  .ant-radio-inner {
    --ant-color-border: ${e=>e.$isInvalid?t.alertRed:t.darkGray};
    --ant-radio-radio-bg-color: ${t.white};
    --ant-color-primary: ${t.darkGray};
    --ant-radio-radio-color: ${t.darkGray};
    --ant-radio-dot-size: 10;
  }
  + .ant-form-item-explain-error {
    color: ${t.alertRed};
  }
`,L=l(g)`
  ${$}
`,B=l(g.Group)`
  ${$}
`,W=x.forwardRef(({className:e,children:a,errorMessage:n,isInvalid:i,radioAttr:o,...d},c)=>r.jsxs(r.Fragment,{children:[r.jsx(L,{...o,...d,className:`styled-container-radio ${e??""}`,ref:c,$isInvalid:i,children:a}),i&&r.jsx("div",{className:"ant-form-item-explain-error",children:n})]}));W.Group=x.forwardRef(({className:e,children:a,errorMessage:n,isInvalid:i,radioGroupAttr:o,...d},c)=>r.jsxs(r.Fragment,{children:[r.jsx(B,{...o,...d,className:`styled-container-radio-group ${e??""}`,ref:c,$isInvalid:i,children:a}),i&&r.jsx("div",{className:"ant-form-item-explain-error",children:n})]}));l(v)`
  .remind {
    color: red;
  }
`;const I=m`
  [class*="css-var"] {
    &.ant-select-dropdown {
      --ant-color-text: ${t.themeBlack};
    }
  }
`,T=l.div`
  [class*="css-var"] {
    --ant-color-text: ${t.themeBlack};
    --ant-color-text-quaternary: ${t.themeBlack};
    --ant-color-text-disabled: ${t.darkGray};
    --ant-color-bg-container-disabled: ${t.inputGray};
    --ant-color-text-placeholder: ${p("#000",.35)};
    --ant-input-input-font-size: 16px;
    --ant-padding-xxs: 8px;
    --ant-padding-xs: 12px;
    --ant-padding-sm: 16px;
    --ant-padding: 20px;
    --ant-padding-md: 24px;
    --ant-padding-lg: 32px;
    --ant-padding-xl: 48px;

    &.ant-select {
      width: 200px;

      .ant-select-selector {
        --ant-border-radius: 8px;
      }
    }
  }
  .ant-select-show-search {
    &.ant-select-focused {
      color: ${t.white};
    }
    .ant-select-arrow {
      right: 0;

      > [role="img"] {
        border: 10px solid ${t.white};
        border-radius: 0 8px 8px 0;

        > svg {
          fill: var(--ant-color-text);
          background-color: ${t.white};
        }
      }
    }
    .ant-select-selector {
    --ant-color-text: ${t.white};

    &:has(.ant-select-selection-search) {
      background-color: ${t.themeBlack};

      .ant-select-selection-placeholder {
        color: ${t.inputGray};
      }
    }
    input {
      &.ant-select-selection-search-input {
        color: ${t.white};
      }
      &::placeholder {
        color: ${t.buttonGray};
        font-weight: 300;
      }
    }
  }
  }
  .ant-select-clear {
    transform: scale(1.3) translateX(3px);
  }
  .ant-form-item-explain-error {
    margin-left: 8px;
    color: ${t.alertRed};
  }
  .ant-select-selection-placeholder {
    font-family: var(--font-family);
    font-size: var(--ant-input-input-font-size);
  }
  /* theme */
  ${e=>{if(e?.$themeCategory==="circle-light")return s`
        .ant-select {
          position: relative;

          .ant-select-selector {
            border-radius: 25px;
            box-shadow: inset 0 3px 5px #c1c1c1;
          }
          .ant-select-arrow {
            &::before {
              content: "";
              position: absolute;
              right: 3px;
              top: 50%;
              transform: translateY(-50%);
              width: 0px;
              height: 0px;
              border-style: solid;
              border-width: 6px 6px 0px;
              border-color: ${t.buttonGray} transparent transparent;
              display: block;
            }
            svg {
              display: none;
            }
          }
        }
      `}}
`;function q({className:e,errorMessage:a,isInvalid:n,selectAttr:i,themeCategory:o,...d},c){const h={...i,...d};return r.jsxs(T,{className:`styled-container-select ${e??""}`,$themeCategory:o,children:[r.jsx(j,{...h,ref:c}),(n||i?.status==="error")&&r.jsxs("div",{className:"ant-form-item-explain-error",children:["*",a]}),r.jsx(I,{})]})}x.forwardRef(q);const P=l.div`
  [class*="css-var"] {
    &.ant-input {
      --ant-border-radius: 15px;
      --ant-color-text: ${t.darkGray};
      --ant-color-border: ${t.gray};
      --ant-color-bg-container-disabled: ${t.inputGray};
      --ant-color-text-disabled: ${t.darkGray};
      --ant-input-input-font-size: 16px;
      --ant-input-input-font-size-sm: 16px;
      --ant-input-input-font-size-lg: 18px;
      --ant-line-height: 1;
      --ant-input-padding-inline: 16px;

      padding-top: 8px;
      padding-bottom: 8px;
      font-family: var(--font-family);
      width: 300px;
      border-color: ${e=>e.$isInvalid&&t.alertRed};
      resize: ${e=>e.$noResizeSetting?"none":"both"};
      box-shadow: inset 0 3px 5px #c1c1c1;

      &:focus {
        box-shadow: none;
      }
      &::placeholder {
        font-weight: 300;
        font-family: var(--font-family);
        font-size: 0.9rem;
        color: #cacaca;
      }
      &[disabled] {
        resize: none;
      }
    }
  }
  .ant-form-item-explain-error {
    margin-left: 10px;
    color: ${t.alertRed};
  }
`;function U({className:e,errorMessage:a,inputAttr:n,inputTextAreaAttr:i,isInvalid:o,noResize:d=!1,...c},h){const f={...n,...i,...c};return r.jsxs(P,{className:`styled-container-textarea ${e??""}`,$status:n?.status,$isInvalid:o,$noResizeSetting:d,children:[r.jsx(k.TextArea,{autoComplete:"off",rows:"3",...f,ref:h}),(o||n?.status==="error")&&r.jsxs("div",{className:"ant-form-item-explain-error",children:["*",a]})]})}x.forwardRef(U);m`
  .ant-tooltip {
    --ant-color-bg-spotlight: ${t.white};
    --ant-border-radius: 16px;
    --ant-control-height: 24px;
    --ant-font-size: 16px;

    ${e=>{if(!e?.$tooltipAttr?.color)return s`
          --ant-color-text-light-solid: ${t.darkGray};
        `}}

    .ant-tooltip-arrow {
      display: none;
    }
    .ant-tooltip-content {
      ${e=>{const a=e?.$tooltipAttr?.placement;if(!a||a&&a.includes("bottom"))return s`
            margin-top: -8px;
          `;if(a&&a.includes("top"))return s`
            margin-bottom: -8px;
          `;if(a&&a.includes("left"))return s`
            margin-right: -8px;
          `;if(a&&a.includes("right"))return s`
            margin-left: -8px;
          `;if(a==="bottomRight")return s`
            --ant-color-text-light-solid: ${t.darkGray};
          `}}
      .ant-tooltip-inner {
        box-shadow: none;
        padding-top: 6px;
        padding-bottom: 6px;
        border-radius: var(--ant-border-radius);
        box-shadow: 0 3px 5px #acacac;
      }
    }
    ${e=>e.$contentStyles}
  }
`;l.div`
  .trigger-container{
    display:flex;
    align-items:center;
    height:100%;
  }
`;l.span`
  display: inline-flex;
  align-items: center;

  .value {
    width: ${e=>typeof e.$valueWidth=="number"?`${e.$valueWidth}px`:e.$valueWidth};
    text-align: ${e=>e.$valueTextAlign};
  }
  .unit {
    width: ${e=>typeof e.$unitWidth=="number"?`${e.$unitWidth}px`:e.$unitWidth};
    margin-left: 8px;
    text-align: ${e=>e.$unitTextAlign};
  }
`;const A=l.div`
  h4 {
    color: #a6763d;
  }
  .container {
    height: 200px;
    background-color: #9bc1d3;

    > div {
      background-color: #2c6a88;
    }
  }
`;function H(){return r.jsx(A,{children:r.jsxs(S,{headerTitle:"示範頁面 Demo Page",children:[r.jsx("h1",{children:"Demo Page"}),r.jsx("h4",{children:"示範margin-top:30px (className加上mg-t-30) ："}),r.jsx("div",{className:"mg-t-30",children:"Lorem idivsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}),r.jsx("h4",{children:"示範margin-top:-10px (className加上mg-t-10-minus)："}),r.jsx("div",{className:"mg-t-10-minus",children:"Lorem idivsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}),r.jsx("h4",{children:"示範padding-left:30px (className加上pd-l-30)："}),r.jsx("div",{className:"pd-l-30",children:"Lorem idivsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}),r.jsx("h4",{children:"示範width:50% (className加上w-50)"}),r.jsx("div",{className:"w-50",children:"Lorem idivsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}),r.jsx("h4",{children:"示範height:30% (className加上h-30)"}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"h-30",children:"我是容器內的元素，高度只有容器的30%"})})]})})}export{H as default};
