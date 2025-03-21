import Switcher from '@/components/Switcher';
import SwitcherItem from '@/components/SwitcherItem';
import IconFeed from '@/app/IconFeed';
import IconGrid from '@/app/IconGrid';
import IconContact from '@/app/IconContact';
import {
  PATH_FEED_INFERRED,
  PATH_GRID_INFERRED,
  PATH_CONTACT,
} from '@/app/paths';
import IconSearch from './IconSearch';
import { useAppState } from '@/state/AppState';
import { GRID_HOMEPAGE_ENABLED } from './config';
import AdminAppMenu from '@/admin/AdminAppMenu';
import Spinner from '@/components/Spinner';

export type SwitcherSelection = 'feed' | 'grid' | 'contact' |'admin';

export default function ViewSwitcher({
  currentSelection,
}: {
  currentSelection?: SwitcherSelection
}) {
  const {
    isUserSignedIn,
    isUserSignedInEager,
    setIsCommandKOpen,
  } = useAppState();

  const renderItemFeed =
    <SwitcherItem
      icon={<IconFeed />}
      href={PATH_FEED_INFERRED}
      active={currentSelection === 'feed'}
      noPadding
    />;

  const renderItemGrid =
    <SwitcherItem
      icon={<IconGrid />}
      href={PATH_GRID_INFERRED}
      active={currentSelection === 'grid'}
      noPadding
    />;

  const renderItemContact = () =>
    <SwitcherItem
      icon={<IconContact />}
      href={PATH_CONTACT}
      active={currentSelection === 'contact'}
      noPadding
    />;

  return (
    <div className="flex gap-1 sm:gap-2">
      <Switcher>
        {GRID_HOMEPAGE_ENABLED ? renderItemGrid : renderItemFeed}
        {GRID_HOMEPAGE_ENABLED ? renderItemFeed : renderItemGrid}
        {renderItemContact()}
        {/* Show spinner if admin is suspected to be logged in */}
        {(isUserSignedInEager && !isUserSignedIn) &&
          <SwitcherItem
            icon={<Spinner />}
            isInteractive={false}
            noPadding
          />}
        {isUserSignedIn &&
          <SwitcherItem
            className="p-0!"
            icon={<AdminAppMenu />}
            noPadding
          />}
      </Switcher>
      <Switcher type="borderless">
        <SwitcherItem
          icon={<IconSearch />}
          onClick={() => setIsCommandKOpen?.(true)}
        />
      </Switcher>
    </div>
  );
}
