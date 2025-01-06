import Container from '@/components/Container';
import SiteGrid from '@/components/SiteGrid';

export default async function AdminConfigurationPage() {
  return (
    <SiteGrid
      contentMain={
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex-grow">
              Contact
            </div>
          </div>
        <Container spaceChildren={false}>
          <div className="max-w-xl w-full">
            <div className="space-y-6">
              Hello! My name is Fletcher!
            </div>
          </div>
        </Container>
        </div>}
    />
  );
}
