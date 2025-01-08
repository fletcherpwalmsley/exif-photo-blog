import Container from '@/components/Container';
import SiteGrid from '@/components/SiteGrid';
import ImageMedium from '@/components/image/ImageMedium';
import EmailInput from '@/components/EmailInput';
import { clsx } from 'clsx/lite';

export default async function AdminConfigurationPage() {
  return (
    <SiteGrid
      contentMain={
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex-grow">
              About
            </div>
          </div>
          <Container spaceChildren={false} centered={true} color={'blue'}>
            <div className="max-w-xl w-full">
              <div className="space-y-6">
                <ImageMedium
                  src="https://photo-blog-store.fletcherwalmsley.com/photo-CQkwS6FzSfFMP1XH.jpg"
                  alt="https://photo-blog-store.fletcherwalmsley.com/photo-CQkwS6FzSfFMP1XH.jpg"
                  aspectRatio={3.0 / 2.0}
                  // className={clsx()}
                />
                <p>
                Hello! My name is Fletcher Walmsley! - Welcome to my photo blog! <br/> <br/>
                This is a place where I add photos I think are cool. <br/>
                The photos I add here are ones I think are photographically good, or because I like the people/place/vibe in them, or because it's a film photo and I need to post somewhere to justify paying ~$1.4 a photo! <br/> <br/>
                The decent pics are usually taken on my Sony A6400 and can be found under the /shot-on/sony/ilce-6400 tag. <br/>
                Film photos can be found under the /tag/film tag. Each film photo is also tagged with the film stock used. E.g. /tag/fujifilm-200
                </p>
              </div>
            </div>
            </Container>
            <EmailInput/>
          <Container color={'blue'}>
          <div className="max-w-xl w-full">
            <div className="space-y-6">
              <p>
              About Me: <br/>
              I am a Software Developer who is currently based in Christchurch, New Zealand.
              I love everything outdoors and attempt to bring a camera of some sorts along with me <br/> <br/>
              While I am a Software Engineer, my area of expertise is not in web development.
              So I will not claim to have created this website, but rather forked and modified the excellent exif-photo-blog template by Sam Becker 
              </p>
            </div>
          </div>
        </Container>
        </div>}
    />
  );
}
