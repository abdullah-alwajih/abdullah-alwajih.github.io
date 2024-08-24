
export const navItems = [
  { name: 'about', icon: (color: string) => `<svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M21.5 9.5L20.029 16.8552C19.6624 18.6879 19.4792 19.6042 19.0007 20.2896C18.5788 20.894 17.9981 21.3701 17.3226 21.6653C16.5567 22.0001 15.6222 22.0001 13.7533 22.0001H10.2467C8.3778 22.0001 7.44332 22.0001 6.67737 21.6653C6.00194 21.3701 5.42121 20.894 4.99929 20.2896C4.52083 19.6042 4.33756 18.6879 3.97103 16.8552L2.5 9.5L7.47452 4.52548C9.05858 2.94142 9.85062 2.14938 10.7639 1.85263C11.5673 1.5916 12.4327 1.5916 13.2361 1.85263C14.1494 2.14938 14.9414 2.94142 16.5255 4.52548L21.5 9.5ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="${color}"/>\n' +
      '<path d="M2.5 9.5L3.97103 16.8552C4.33756 18.6879 4.52083 19.6042 4.99929 20.2896C5.42121 20.894 6.00194 21.3701 6.67737 21.6653C7.44332 22.0001 8.3778 22.0001 10.2467 22.0001H13.7533C15.6222 22.0001 16.5567 22.0001 17.3226 21.6653C17.9981 21.3701 18.5788 20.894 19.0007 20.2896C19.4792 19.6042 19.6624 18.6879 20.029 16.8552L21.5 9.5M1 11L7.47452 4.52548C9.05858 2.94142 9.85062 2.14938 10.7639 1.85263C11.5673 1.5916 12.4327 1.5916 13.2361 1.85263C14.1494 2.14938 14.9414 2.94142 16.5255 4.52548L23 11M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '</svg>`, path: '/' },
  { name: 'experiences', icon: (color: string) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<g opacity="0.12">\n' +
      '<path d="M4 18.8C4 16.149 6.14903 14 8.8 14H15.2C17.851 14 20 16.149 20 18.8V18.8C20 20.5673 18.5673 22 16.8 22H7.2C5.43269 22 4 20.5673 4 18.8V18.8Z" fill="${color}"/>\n' +
      '<path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" fill="${color}"/>\n' +
      '</g>\n' +
      '<path d="M4 18.8C4 16.149 6.14903 14 8.8 14H15.2C17.851 14 20 16.149 20 18.8V18.8C20 20.5673 18.5673 22 16.8 22H7.2C5.43269 22 4 20.5673 4 18.8V18.8Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '<path d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '</svg>`, path: '/experiences' },
  { name: 'skills', icon:  (color: string) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path opacity="0.12" fill-rule="evenodd" clip-rule="evenodd" d="M21.9991 6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8ZM15.0024 10.9995C16.107 10.9995 17.0024 10.1041 17.0024 8.99951C17.0024 7.89494 16.107 6.99951 15.0024 6.99951C13.8979 6.99951 13.0024 7.89494 13.0024 8.99951C13.0024 10.1041 13.8979 10.9995 15.0024 10.9995Z" fill="${color}"/>\n' +
      '<path d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '</svg>`, path: '/skills' },
  { name: 'portfolio', icon:  (color: string) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path opacity="0.12" d="M3.00003 12C3.00003 7.02944 7.02947 3 12 3C14.3064 3 16.4101 3.86752 18.0027 5.29404C20.2106 4.85301 21.8457 5.05317 22.3923 6.00001C22.9388 6.94653 22.2952 8.46192 20.8103 10.1529C19.2938 11.8798 16.8999 13.7898 14 15.4641C11.101 17.1378 8.25082 18.2558 5.99739 18.706C3.78941 19.147 2.15436 18.9468 1.6077 18C1.06121 17.0535 1.70481 15.5381 3.18975 13.8471C3.0654 13.2509 3.00003 12.6331 3.00003 12Z" fill="${color}"/>\n' +
      '<path d="M20.8103 10.1529C22.2952 8.46192 22.9388 6.94653 22.3923 6.00001C21.8457 5.05317 20.2106 4.85301 18.0027 5.29404M20.8103 10.1529C19.2938 11.8798 16.8999 13.7898 14 15.4641C8.26049 18.7778 2.71227 19.9132 1.6077 18C1.06121 17.0535 1.70481 15.5381 3.18975 13.8471M20.8103 10.1529C20.9347 10.7491 21 11.3669 21 12C21 16.9706 16.9706 21 12 21C7.66255 21 4.04173 17.9316 3.18975 13.8471M20.8103 10.1529C20.4113 8.2402 19.4052 6.55034 18.0027 5.29404M18.0027 5.29404C16.4101 3.86752 14.3064 3 12 3C7.02947 3 3.00003 7.02944 3.00003 12C3.00003 12.6331 3.0654 13.2509 3.18975 13.8471" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '</svg>`, path: '/portfolio' },
  { name: 'contact', icon:  (color: string) => `<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.499 2.33015 14.921 2.9214 16.1973C3.38829 17.2052 3.83022 18.0644 3.50454 19.1977C3.34789 19.7429 2.95529 20.2798 2.90866 20.8475C2.85534 21.4967 3.42708 22.0228 4.06965 21.9157C5.3779 21.6977 6.0076 20.6574 7.52552 21.0144C7.69003 21.0531 8.11879 21.2065 8.97627 21.5132C9.88354 21.8377 10.8606 22 12 22Z" fill="color" opacity="0.12"${color}/>\n' +
      '<path d="M8 10H16M8 14H12M22 12C22 17.5228 17.5228 22 12 22C10.8606 22 9.88354 21.8377 8.97627 21.5132C8.11879 21.2065 7.69003 21.0531 7.52552 21.0144C6.0076 20.6574 5.3779 21.6977 4.06965 21.9157C3.42708 22.0228 2.85534 21.4967 2.90866 20.8475C2.95529 20.2798 3.34789 19.7429 3.50454 19.1977C3.83022 18.0644 3.38829 17.2052 2.9214 16.1973C2.33015 14.921 2 13.499 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="${color}" stroke-width="1.5" stroke-linecap="rolor" stroke-width=und" stroke-linejoin="round"/>\n' +
      '</svg>`, path: '/contact' },
];


