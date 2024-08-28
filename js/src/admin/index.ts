import app from 'flarum/admin/app';

app.initializers.add('foskym/flarum-better-user-directory', () => {
  app.extensionData.for('foskym-better-user-directory')
    .registerSetting({
      setting: 'foskym-better-user-directory.hide_search',
      label: app.translator.trans('foskym-better-user-directory.admin.settings.hide_search'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'foskym-better-user-directory.hide_filter_groups',
      label: app.translator.trans('foskym-better-user-directory.admin.settings.hide_filter_groups'),
      type: 'boolean',
    });
});
