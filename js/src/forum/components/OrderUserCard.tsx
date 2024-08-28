import app from 'flarum/common/app';
import UserCard from 'flarum/forum/components/UserCard';
import ItemList from 'flarum/common/utils/ItemList';
import humanTime from 'flarum/common/utils/humanTime';
import Component from 'flarum/common/Component';
import UserControls from 'flarum/forum/utils/UserControls';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import icon from 'flarum/common/helpers/icon';
import Dropdown from 'flarum/common/components/Dropdown';
import Link from 'flarum/common/components/Link';
import AvatarEditor from 'flarum/forum/components/AvatarEditor';
import listItems from 'flarum/common/helpers/listItems';
import classList from 'flarum/common/utils/classList';

export default class OrderUserCard extends UserCard {
  view() {
    const user = this.attrs.user;
    const controls = UserControls.controls(user, this).toArray();
    const color = user.color();
    const badges = user.badges().toArray();
    const position = this.attrs.position;

    return (
      <div className={classList('UserCard UserCard--order', this.attrs.className)} style={color && { '--usercard-bg': color }}>
        <div className="darkenBackground">
          <div className="container">
            {!!controls.length && (
              <Dropdown
                className="UserCard-controls App-primaryControl"
                menuClassName="Dropdown-menu--right"
                buttonClassName={this.attrs.controlsButtonClassName}
                label={app.translator.trans('core.forum.user_controls.button')}
                accessibleToggleLabel={app.translator.trans('core.forum.user_controls.toggle_dropdown_accessible_label')}
                icon="fas fa-ellipsis-v"
              >
                {controls}
              </Dropdown>
            )}
            
            <div className="UserCard--order-position">{position}</div>

            <div className="UserCard-profile">
              <h1 className="UserCard-identity">
                {this.attrs.editable ? (
                  <>
                    <AvatarEditor user={user} className="UserCard-avatar" /> {username(user)}
                  </>
                ) : (
                  <Link href={app.route.user(user)}>
                    <div className="UserCard-avatar">{avatar(user, { loading: 'eager' })}</div>
                    {username(user)}
                  </Link>
                )}
              </h1>

              {!!badges.length && <ul className="UserCard-badges badges">{listItems(badges)}</ul>}

              <ul className="UserCard-info">{listItems(this.infoItems().toArray())}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  infoItems() {
    const superItems = super.infoItems();
    console.log(superItems);
    const items = new ItemList();
    const user = this.attrs.user;

    items.add('joined', app.translator.trans('core.forum.user.joined_date_text', { ago: humanTime(user.joinTime()) }));

    return items;
  }
}
