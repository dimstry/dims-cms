import type { Schema, Struct } from '@strapi/strapi';

export interface MainBenner extends Struct.ComponentSchema {
  collectionName: 'components_main_benners';
  info: {
    description: '';
    displayName: 'benner';
    icon: 'command';
  };
  attributes: {
    button_title: Schema.Attribute.String;
    image_lottie: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MainPortofolio extends Struct.ComponentSchema {
  collectionName: 'components_main_portofolios';
  info: {
    displayName: 'portofolio';
    icon: 'connector';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MainSkills extends Struct.ComponentSchema {
  collectionName: 'components_main_skills';
  info: {
    description: '';
    displayName: 'skills';
    icon: 'code';
  };
  attributes: {
    Tech: Schema.Attribute.Component<'main.tech', false>;
    title: Schema.Attribute.String;
  };
}

export interface MainTech extends Struct.ComponentSchema {
  collectionName: 'components_main_teches';
  info: {
    description: '';
    displayName: 'tech';
  };
  attributes: {
    detail: Schema.Attribute.Component<'main.tech-list', true>;
    image: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface MainTechList extends Struct.ComponentSchema {
  collectionName: 'components_main_tech_lists';
  info: {
    displayName: 'tech_list';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'main.benner': MainBenner;
      'main.portofolio': MainPortofolio;
      'main.skills': MainSkills;
      'main.tech': MainTech;
      'main.tech-list': MainTechList;
    }
  }
}
