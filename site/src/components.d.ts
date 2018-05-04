/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}




import {
  AnchorLink as AnchorLink
} from './components/anchor-link/anchor-link';

declare global {
  interface HTMLAnchorLinkElement extends AnchorLink, HTMLStencilElement {
  }
  var HTMLAnchorLinkElement: {
    prototype: HTMLAnchorLinkElement;
    new (): HTMLAnchorLinkElement;
  };
  interface HTMLElementTagNameMap {
    "anchor-link": HTMLAnchorLinkElement;
  }
  interface ElementTagNameMap {
    "anchor-link": HTMLAnchorLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "anchor-link": JSXElements.AnchorLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface AnchorLinkAttributes extends HTMLAttributes {
      to?: string;
    }
  }
}


import {
  AppIcon as AppIcon
} from './components/app-icon/app-icon';

declare global {
  interface HTMLAppIconElement extends AppIcon, HTMLStencilElement {
  }
  var HTMLAppIconElement: {
    prototype: HTMLAppIconElement;
    new (): HTMLAppIconElement;
  };
  interface HTMLElementTagNameMap {
    "app-icon": HTMLAppIconElement;
  }
  interface ElementTagNameMap {
    "app-icon": HTMLAppIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-icon": JSXElements.AppIconAttributes;
    }
  }
  namespace JSXElements {
    export interface AppIconAttributes extends HTMLAttributes {
      name?: string;
    }
  }
}


import {
  AppMarked as AppMarked
} from './components/app-marked/app-marked';

declare global {
  interface HTMLAppMarkedElement extends AppMarked, HTMLStencilElement {
  }
  var HTMLAppMarkedElement: {
    prototype: HTMLAppMarkedElement;
    new (): HTMLAppMarkedElement;
  };
  interface HTMLElementTagNameMap {
    "app-marked": HTMLAppMarkedElement;
  }
  interface ElementTagNameMap {
    "app-marked": HTMLAppMarkedElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-marked": JSXElements.AppMarkedAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMarkedAttributes extends HTMLAttributes {
      doc?: string;
    }
  }
}


import {
  AvcCodeType as AvcCodeType
} from './components/avc-code-type/avc-code-type';

declare global {
  interface HTMLAvcCodeTypeElement extends AvcCodeType, HTMLStencilElement {
  }
  var HTMLAvcCodeTypeElement: {
    prototype: HTMLAvcCodeTypeElement;
    new (): HTMLAvcCodeTypeElement;
  };
  interface HTMLElementTagNameMap {
    "avc-code-type": HTMLAvcCodeTypeElement;
  }
  interface ElementTagNameMap {
    "avc-code-type": HTMLAvcCodeTypeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "avc-code-type": JSXElements.AvcCodeTypeAttributes;
    }
  }
  namespace JSXElements {
    export interface AvcCodeTypeAttributes extends HTMLAttributes {
      typeId?: string;
    }
  }
}


import {
  BlogPage as BlogPage
} from './components/blog-page/blog-page';

declare global {
  interface HTMLBlogPageElement extends BlogPage, HTMLStencilElement {
  }
  var HTMLBlogPageElement: {
    prototype: HTMLBlogPageElement;
    new (): HTMLBlogPageElement;
  };
  interface HTMLElementTagNameMap {
    "blog-page": HTMLBlogPageElement;
  }
  interface ElementTagNameMap {
    "blog-page": HTMLBlogPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "blog-page": JSXElements.BlogPageAttributes;
    }
  }
  namespace JSXElements {
    export interface BlogPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  App as CapacitorSite
} from './components/capacitor-site/capacitor-site';

declare global {
  interface HTMLCapacitorSiteElement extends CapacitorSite, HTMLStencilElement {
  }
  var HTMLCapacitorSiteElement: {
    prototype: HTMLCapacitorSiteElement;
    new (): HTMLCapacitorSiteElement;
  };
  interface HTMLElementTagNameMap {
    "capacitor-site": HTMLCapacitorSiteElement;
  }
  interface ElementTagNameMap {
    "capacitor-site": HTMLCapacitorSiteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "capacitor-site": JSXElements.CapacitorSiteAttributes;
    }
  }
  namespace JSXElements {
    export interface CapacitorSiteAttributes extends HTMLAttributes {
      isLandingPage?: boolean;
    }
  }
}


import {
  DemosPage as DemosPage
} from './components/demos-page/demos-page';

declare global {
  interface HTMLDemosPageElement extends DemosPage, HTMLStencilElement {
  }
  var HTMLDemosPageElement: {
    prototype: HTMLDemosPageElement;
    new (): HTMLDemosPageElement;
  };
  interface HTMLElementTagNameMap {
    "demos-page": HTMLDemosPageElement;
  }
  interface ElementTagNameMap {
    "demos-page": HTMLDemosPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "demos-page": JSXElements.DemosPageAttributes;
    }
  }
  namespace JSXElements {
    export interface DemosPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  DocSnippet as DocSnippet
} from './components/doc-snippet/doc-snippet';

declare global {
  interface HTMLDocSnippetElement extends DocSnippet, HTMLStencilElement {
  }
  var HTMLDocSnippetElement: {
    prototype: HTMLDocSnippetElement;
    new (): HTMLDocSnippetElement;
  };
  interface HTMLElementTagNameMap {
    "doc-snippet": HTMLDocSnippetElement;
  }
  interface ElementTagNameMap {
    "doc-snippet": HTMLDocSnippetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "doc-snippet": JSXElements.DocSnippetAttributes;
    }
  }
  namespace JSXElements {
    export interface DocSnippetAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  DocumentComponent as DocumentComponent
} from './components/document-component/document-component';

declare global {
  interface HTMLDocumentComponentElement extends DocumentComponent, HTMLStencilElement {
  }
  var HTMLDocumentComponentElement: {
    prototype: HTMLDocumentComponentElement;
    new (): HTMLDocumentComponentElement;
  };
  interface HTMLElementTagNameMap {
    "document-component": HTMLDocumentComponentElement;
  }
  interface ElementTagNameMap {
    "document-component": HTMLDocumentComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "document-component": JSXElements.DocumentComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface DocumentComponentAttributes extends HTMLAttributes {
      pages?: string[];
    }
  }
}


import {
  LandingPage as LandingPage
} from './components/landing-page/landing-page';

declare global {
  interface HTMLLandingPageElement extends LandingPage, HTMLStencilElement {
  }
  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };
  interface HTMLElementTagNameMap {
    "landing-page": HTMLLandingPageElement;
  }
  interface ElementTagNameMap {
    "landing-page": HTMLLandingPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "landing-page": JSXElements.LandingPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LandingPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  NewsletterSignup as NewsletterSignup
} from './components/newsletter-signup/newsletter-signup';

declare global {
  interface HTMLNewsletterSignupElement extends NewsletterSignup, HTMLStencilElement {
  }
  var HTMLNewsletterSignupElement: {
    prototype: HTMLNewsletterSignupElement;
    new (): HTMLNewsletterSignupElement;
  };
  interface HTMLElementTagNameMap {
    "newsletter-signup": HTMLNewsletterSignupElement;
  }
  interface ElementTagNameMap {
    "newsletter-signup": HTMLNewsletterSignupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "newsletter-signup": JSXElements.NewsletterSignupAttributes;
    }
  }
  namespace JSXElements {
    export interface NewsletterSignupAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  PluginApi as PluginApi
} from './components/plugin-api/plugin-api';

declare global {
  interface HTMLPluginApiElement extends PluginApi, HTMLStencilElement {
  }
  var HTMLPluginApiElement: {
    prototype: HTMLPluginApiElement;
    new (): HTMLPluginApiElement;
  };
  interface HTMLElementTagNameMap {
    "plugin-api": HTMLPluginApiElement;
  }
  interface ElementTagNameMap {
    "plugin-api": HTMLPluginApiElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plugin-api": JSXElements.PluginApiAttributes;
    }
  }
  namespace JSXElements {
    export interface PluginApiAttributes extends HTMLAttributes {
      index?: boolean;
      name?: string;
    }
  }
}


import {
  PluginPlatforms as PluginPlatforms
} from './components/plugin-platforms/plugin-platforms';

declare global {
  interface HTMLPluginPlatformsElement extends PluginPlatforms, HTMLStencilElement {
  }
  var HTMLPluginPlatformsElement: {
    prototype: HTMLPluginPlatformsElement;
    new (): HTMLPluginPlatformsElement;
  };
  interface HTMLElementTagNameMap {
    "plugin-platforms": HTMLPluginPlatformsElement;
  }
  interface ElementTagNameMap {
    "plugin-platforms": HTMLPluginPlatformsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plugin-platforms": JSXElements.PluginPlatformsAttributes;
    }
  }
  namespace JSXElements {
    export interface PluginPlatformsAttributes extends HTMLAttributes {
      platforms?: string;
    }
  }
}


import {
  SiteBar as SiteBar
} from './components/site-bar/site-bar';

declare global {
  interface HTMLSiteBarElement extends SiteBar, HTMLStencilElement {
  }
  var HTMLSiteBarElement: {
    prototype: HTMLSiteBarElement;
    new (): HTMLSiteBarElement;
  };
  interface HTMLElementTagNameMap {
    "site-bar": HTMLSiteBarElement;
  }
  interface ElementTagNameMap {
    "site-bar": HTMLSiteBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-bar": JSXElements.SiteBarAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteBarAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteHeader as SiteHeader
} from './components/site-header/site-header';

declare global {
  interface HTMLSiteHeaderElement extends SiteHeader, HTMLStencilElement {
  }
  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  interface ElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-header": JSXElements.SiteHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteMenu as SiteMenu
} from './components/site-menu/site-menu';

declare global {
  interface HTMLSiteMenuElement extends SiteMenu, HTMLStencilElement {
  }
  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };
  interface HTMLElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  interface ElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-menu": JSXElements.SiteMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteMenuAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
