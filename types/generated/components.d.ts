import type { Schema, Struct } from '@strapi/strapi';

export interface RecordEntriesDivision extends Struct.ComponentSchema {
  collectionName: 'components_record_entries_divisions';
  info: {
    displayName: 'Division';
  };
  attributes: {
    participant: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    value: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface RecordEntriesParticipant extends Struct.ComponentSchema {
  collectionName: 'components_record_entries_participants';
  info: {
    description: '';
    displayName: 'Participant';
  };
  attributes: {
    participant: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    tags: Schema.Attribute.Component<'record-entries.tag', true>;
  };
}

export interface RecordEntriesPayer extends Struct.ComponentSchema {
  collectionName: 'components_record_entries_payers';
  info: {
    description: '';
    displayName: 'Payer';
  };
  attributes: {
    paid: Schema.Attribute.Decimal & Schema.Attribute.Required;
    payer: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface RecordEntriesTag extends Struct.ComponentSchema {
  collectionName: 'components_record_entries_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'record-entries.division': RecordEntriesDivision;
      'record-entries.participant': RecordEntriesParticipant;
      'record-entries.payer': RecordEntriesPayer;
      'record-entries.tag': RecordEntriesTag;
    }
  }
}
