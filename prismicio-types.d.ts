// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Blog → Header*
 */
export interface BlogDocumentDataHeaderItem {
  /**
   * logo field in *Blog → Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Link Label 1 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].linklabel1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel1: prismic.KeyTextField;

  /**
   * Link 1 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].link1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link1: prismic.KeyTextField;

  /**
   * Link Label 2 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].linklabel2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel2: prismic.KeyTextField;

  /**
   * Link 2 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].link2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link2: prismic.KeyTextField;

  /**
   * Link Label 3 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].linklabel3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel3: prismic.KeyTextField;

  /**
   * Link 3 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].link3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link3: prismic.KeyTextField;

  /**
   * Link Label 4 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].linklabel4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel4: prismic.KeyTextField;

  /**
   * Link 4 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].link4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link4: prismic.KeyTextField;

  /**
   * Link Label 5 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].linklabel5
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel5: prismic.KeyTextField;

  /**
   * Link 5 field in *Blog → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[].link5
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link5: prismic.KeyTextField;
}

type BlogDocumentDataSlicesSlice = EmAltaSlice | GrupoBlogSlice;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Header field in *Blog*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  header: prismic.GroupField<Simplify<BlogDocumentDataHeaderItem>>;

  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Item in *Blog Post → Header*
 */
export interface BlogPostDocumentDataHeaderItem {
  /**
   * logo field in *Blog Post → Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Link Label 1 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].linklabel1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel1: prismic.KeyTextField;

  /**
   * Link 1 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].link1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link1: prismic.KeyTextField;

  /**
   * Link Label 2 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].linklabel2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel2: prismic.KeyTextField;

  /**
   * Link 2 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].link2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link2: prismic.KeyTextField;

  /**
   * Link Label 3 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].linklabel3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel3: prismic.KeyTextField;

  /**
   * Link 3 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].link3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link3: prismic.KeyTextField;

  /**
   * Link Label 4 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].linklabel4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel4: prismic.KeyTextField;

  /**
   * Link 4 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].link4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link4: prismic.KeyTextField;

  /**
   * Link Label 5 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].linklabel5
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel5: prismic.KeyTextField;

  /**
   * Link 5 field in *Blog Post → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[].link5
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link5: prismic.KeyTextField;
}

type BlogPostDocumentDataSlicesSlice = BlogConteudoSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Header field in *Blog Post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.header[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  header: prismic.GroupField<Simplify<BlogPostDocumentDataHeaderItem>>;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

/**
 * Item in *Landing Page → Header*
 */
export interface LandingPageDocumentDataHeaderItem {
  /**
   * logo field in *Landing Page → Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Link Label 1 field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].linklabel1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel1: prismic.KeyTextField;

  /**
   * Link 1 field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].link1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link1: prismic.KeyTextField;

  /**
   * Link Label 2 field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].linklabel2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel2: prismic.KeyTextField;

  /**
   * Link 2 field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].link2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link2: prismic.KeyTextField;

  /**
   * Link Label 3 field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].linklabel3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linklabel3: prismic.KeyTextField;

  /**
   * Link 3 field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].link3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link3: prismic.KeyTextField;

  /**
   * Botao Label field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].botaolabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  botaolabel: prismic.KeyTextField;

  /**
   * Link Botao field in *Landing Page → Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[].linkbotao
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkbotao: prismic.KeyTextField;
}

/**
 * Item in *Landing Page → Banner*
 */
export interface LandingPageDocumentDataBannerItem {
  /**
   * Texto field in *Landing Page → Banner*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.banner[].texto
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto: prismic.RichTextField;

  /**
   * Imagem Esquerda field in *Landing Page → Banner*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.banner[].img_esq
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img_esq: prismic.ImageField<never>;

  /**
   * Imagem Direita field in *Landing Page → Banner*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.banner[].img_dir
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img_dir: prismic.ImageField<never>;

  /**
   * Imagem Baixo field in *Landing Page → Banner*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.banner[].img_baixo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img_baixo: prismic.ImageField<never>;

  /**
   * Botao Label field in *Landing Page → Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.banner[].botaolabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  botaolabel: prismic.KeyTextField;

  /**
   * Link Botao field in *Landing Page → Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.banner[].linkbotao
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkbotao: prismic.KeyTextField;
}

type LandingPageDocumentDataSlicesSlice =
  | CorpoSlice
  | FormularioSlice
  | NewstellerSlice;

/**
 * Content for Landing Page documents
 */
interface LandingPageDocumentData {
  /**
   * Header field in *Landing Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.header[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  header: prismic.GroupField<Simplify<LandingPageDocumentDataHeaderItem>>;

  /**
   * Banner field in *Landing Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.banner[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  banner: prismic.GroupField<Simplify<LandingPageDocumentDataBannerItem>>;

  /**
   * Slice Zone field in *Landing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Landing Page document from Prismic
 *
 * - **API ID**: `landing_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LandingPageDocumentData>,
    "landing_page",
    Lang
  >;

export type AllDocumentTypes =
  | BlogDocument
  | BlogPostDocument
  | LandingPageDocument;

/**
 * Primary content in *BlogConteudo → Primary*
 */
export interface BlogConteudoSliceDefaultPrimary {
  /**
   * Texto field in *BlogConteudo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_conteudo.primary.texto
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto: prismic.RichTextField;
}

/**
 * Default variation for BlogConteudo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogConteudoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogConteudoSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *BlogConteudo → Primary*
 */
export interface BlogConteudoSliceImagemPrimary {
  /**
   * Imagem field in *BlogConteudo → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_conteudo.primary.imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;
}

/**
 * Imagem variation for BlogConteudo Slice
 *
 * - **API ID**: `imagem`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogConteudoSliceImagem = prismic.SharedSliceVariation<
  "imagem",
  Simplify<BlogConteudoSliceImagemPrimary>,
  never
>;

/**
 * Primary content in *BlogConteudo → Primary*
 */
export interface BlogConteudoSliceIFramePrimary {
  /**
   * Frame field in *BlogConteudo → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_conteudo.primary.frame
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  frame: prismic.EmbedField;
}

/**
 * iFrame variation for BlogConteudo Slice
 *
 * - **API ID**: `iFrame`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogConteudoSliceIFrame = prismic.SharedSliceVariation<
  "iFrame",
  Simplify<BlogConteudoSliceIFramePrimary>,
  never
>;

/**
 * Slice variation for *BlogConteudo*
 */
type BlogConteudoSliceVariation =
  | BlogConteudoSliceDefault
  | BlogConteudoSliceImagem
  | BlogConteudoSliceIFrame;

/**
 * BlogConteudo Shared Slice
 *
 * - **API ID**: `blog_conteudo`
 * - **Description**: BlogConteudo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogConteudoSlice = prismic.SharedSlice<
  "blog_conteudo",
  BlogConteudoSliceVariation
>;

/**
 * Primary content in *Corpo → Items*
 */
export interface CorpoSliceDefaultItem {
  /**
   * Titulo field in *Corpo → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Cor field in *Corpo → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].cor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cor: prismic.ColorField;
}

/**
 * Default variation for Corpo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CorpoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<CorpoSliceDefaultItem>
>;

/**
 * Primary content in *Corpo → Items*
 */
export interface CorpoSliceImagensItem {
  /**
   * Titulo field in *Corpo → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Cor field in *Corpo → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].cor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cor: prismic.ColorField;

  /**
   * Imagem 1 field in *Corpo → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].img1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img1: prismic.ImageField<never>;

  /**
   * Imagem 2 field in *Corpo → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].img2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img2: prismic.ImageField<never>;

  /**
   * Imagem 3 field in *Corpo → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].img3
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img3: prismic.ImageField<never>;
}

/**
 * Imagens variation for Corpo Slice
 *
 * - **API ID**: `imagens`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CorpoSliceImagens = prismic.SharedSliceVariation<
  "imagens",
  Record<string, never>,
  Simplify<CorpoSliceImagensItem>
>;

/**
 * Primary content in *Corpo → Items*
 */
export interface CorpoSliceIFrameItem {
  /**
   * Titulo field in *Corpo → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Cor field in *Corpo → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].cor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cor: prismic.ColorField;

  /**
   * Incorporado field in *Corpo → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: corpo.items[].incorporado
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  incorporado: prismic.EmbedField;
}

/**
 * IFrame variation for Corpo Slice
 *
 * - **API ID**: `iFrame`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CorpoSliceIFrame = prismic.SharedSliceVariation<
  "iFrame",
  Record<string, never>,
  Simplify<CorpoSliceIFrameItem>
>;

/**
 * Slice variation for *Corpo*
 */
type CorpoSliceVariation =
  | CorpoSliceDefault
  | CorpoSliceImagens
  | CorpoSliceIFrame;

/**
 * Corpo Shared Slice
 *
 * - **API ID**: `corpo`
 * - **Description**: Corpo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CorpoSlice = prismic.SharedSlice<"corpo", CorpoSliceVariation>;

/**
 * Primary content in *EmAlta → Primary*
 */
export interface EmAltaSliceDefaultPrimary {
  /**
   * TItulo Grupo field in *EmAlta → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: em_alta.primary.titulogrupo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulogrupo: prismic.KeyTextField;
}

/**
 * Primary content in *EmAlta → Items*
 */
export interface EmAltaSliceDefaultItem {
  /**
   * Titulo Post field in *EmAlta → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: em_alta.items[].titulopost
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulopost: prismic.KeyTextField;

  /**
   * Imagem field in *EmAlta → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: em_alta.items[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Link field in *EmAlta → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: ./blog
   * - **API ID Path**: em_alta.items[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Default variation for EmAlta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmAltaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EmAltaSliceDefaultPrimary>,
  Simplify<EmAltaSliceDefaultItem>
>;

/**
 * Slice variation for *EmAlta*
 */
type EmAltaSliceVariation = EmAltaSliceDefault;

/**
 * EmAlta Shared Slice
 *
 * - **API ID**: `em_alta`
 * - **Description**: EmAlta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmAltaSlice = prismic.SharedSlice<"em_alta", EmAltaSliceVariation>;

/**
 * Primary content in *Formulario → Primary*
 */
export interface FormularioSliceDefaultPrimary {
  /**
   * Titulo field in *Formulario → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: formulario.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Cor field in *Formulario → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: formulario.primary.cor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cor: prismic.ColorField;
}

/**
 * Default variation for Formulario Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormularioSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FormularioSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Formulario*
 */
type FormularioSliceVariation = FormularioSliceDefault;

/**
 * Formulario Shared Slice
 *
 * - **API ID**: `formulario`
 * - **Description**: Formulario
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormularioSlice = prismic.SharedSlice<
  "formulario",
  FormularioSliceVariation
>;

/**
 * Primary content in *GrupoBlog → Primary*
 */
export interface GrupoBlogSliceDefaultPrimary {
  /**
   * Titulo Grupo field in *GrupoBlog → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grupo_blog.primary.titulogrupo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulogrupo: prismic.KeyTextField;

  /**
   * ID Grupo field in *GrupoBlog → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grupo_blog.primary.idgrupo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  idgrupo: prismic.KeyTextField;
}

/**
 * Primary content in *GrupoBlog → Items*
 */
export interface GrupoBlogSliceDefaultItem {
  /**
   * Titulo Post field in *GrupoBlog → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grupo_blog.items[].titulopost
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulopost: prismic.KeyTextField;

  /**
   * Imagem field in *GrupoBlog → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: grupo_blog.items[].imagem
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * Link field in *GrupoBlog → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: ./blog
   * - **API ID Path**: grupo_blog.items[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Default variation for GrupoBlog Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GrupoBlogSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GrupoBlogSliceDefaultPrimary>,
  Simplify<GrupoBlogSliceDefaultItem>
>;

/**
 * Slice variation for *GrupoBlog*
 */
type GrupoBlogSliceVariation = GrupoBlogSliceDefault;

/**
 * GrupoBlog Shared Slice
 *
 * - **API ID**: `grupo_blog`
 * - **Description**: GrupoBlog
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GrupoBlogSlice = prismic.SharedSlice<
  "grupo_blog",
  GrupoBlogSliceVariation
>;

/**
 * Primary content in *Newsteller → Primary*
 */
export interface NewstellerSliceDefaultPrimary {
  /**
   * Titulo field in *Newsteller → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsteller.primary.titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Cor field in *Newsteller → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: newsteller.primary.cor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cor: prismic.ColorField;
}

/**
 * Default variation for Newsteller Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewstellerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewstellerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Newsteller*
 */
type NewstellerSliceVariation = NewstellerSliceDefault;

/**
 * Newsteller Shared Slice
 *
 * - **API ID**: `newsteller`
 * - **Description**: Newsteller
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewstellerSlice = prismic.SharedSlice<
  "newsteller",
  NewstellerSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataHeaderItem,
      BlogDocumentDataSlicesSlice,
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataHeaderItem,
      BlogPostDocumentDataSlicesSlice,
      LandingPageDocument,
      LandingPageDocumentData,
      LandingPageDocumentDataHeaderItem,
      LandingPageDocumentDataBannerItem,
      LandingPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogConteudoSlice,
      BlogConteudoSliceDefaultPrimary,
      BlogConteudoSliceImagemPrimary,
      BlogConteudoSliceIFramePrimary,
      BlogConteudoSliceVariation,
      BlogConteudoSliceDefault,
      BlogConteudoSliceImagem,
      BlogConteudoSliceIFrame,
      CorpoSlice,
      CorpoSliceDefaultItem,
      CorpoSliceImagensItem,
      CorpoSliceIFrameItem,
      CorpoSliceVariation,
      CorpoSliceDefault,
      CorpoSliceImagens,
      CorpoSliceIFrame,
      EmAltaSlice,
      EmAltaSliceDefaultPrimary,
      EmAltaSliceDefaultItem,
      EmAltaSliceVariation,
      EmAltaSliceDefault,
      FormularioSlice,
      FormularioSliceDefaultPrimary,
      FormularioSliceVariation,
      FormularioSliceDefault,
      GrupoBlogSlice,
      GrupoBlogSliceDefaultPrimary,
      GrupoBlogSliceDefaultItem,
      GrupoBlogSliceVariation,
      GrupoBlogSliceDefault,
      NewstellerSlice,
      NewstellerSliceDefaultPrimary,
      NewstellerSliceVariation,
      NewstellerSliceDefault,
    };
  }
}