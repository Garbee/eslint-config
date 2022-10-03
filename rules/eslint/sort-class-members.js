const {error} = require('./options.js');

const customElementLifecycleHooks = [
  'connectedCallback',
  'disconnectedCallback',
  'attributeChangedCallback',
  'adoptedCallback',
].map((hook) => {
  return {
    name: hook,
    type: 'method',
  };
});

const litLifecycleHooks = [
  // Update Cycle
  'shouldUpdate',
  'willUpdate',
  'update',
  'render',

  // Post-Update
  'firstUpdated',
  'updated',
].map((hook) => {
  return {
    name: hook,
    type: 'method',
  };
});

const angularLifecycleHooks = [
  'ngOnChanges',
  'ngOnInit',
  'ngDoCheck',
  'ngAfterContentInit',
  'ngAfterContentChecked',
  'ngAfterViewInit',
  'ngAfterViewChecked',
  'ngOnDestroy',
].map((hook) => {
  return {
    name: hook,
    type: 'method',
  };
});

const frameworkLifecycles = [
  '[webcomponent-lifecycle]',
  '[lit-lifecycle]',
  '[angular-lifecycle]',
];

module.exports = {
  'sort-class-members/sort-class-members': [
    error,
    {
      groups: {
        'angular-lifecycle': angularLifecycleHooks,
        'lit-lifecycle': litLifecycleHooks,
        'webcomponent-lifecycle': customElementLifecycleHooks,
      },
      order: [
        '[static-properties]',
        '[static-methods]',
        '[properties]',
        '[conventional-private-properties]',
        '[arrow-function-properties]',
        '[accessor-pairs]',
        '[getters]',
        '[setters]',
        'constructor',
        ...frameworkLifecycles,
        '[methods]',
        '[conventional-private-methods]',
        '[everything-else]',
      ],
      accessorPairPositioning: 'getThenSet',
      locale: 'en-US',
    },
  ],
};
