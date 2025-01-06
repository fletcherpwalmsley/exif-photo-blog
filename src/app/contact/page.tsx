import Container from '@/components/Container';
import SiteGrid from '@/components/SiteGrid';
import ImageMedium from '@/components/image/ImageMedium';
import { clsx } from 'clsx/lite';

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
          <Container spaceChildren={false} centered={true} color={'blue'}>
            <div className="max-w-xl w-full">
              <div className="space-y-6">
                <ImageMedium
                  src="https://photo-blog-store.fletcherwalmsley.com/photo-CQkwS6FzSfFMP1XH.jpg"
                  alt="https://photo-blog-store.fletcherwalmsley.com/photo-CQkwS6FzSfFMP1XH.jpg"
                  aspectRatio={3.0 / 2.0}
                  className={clsx(
                    'rounded-[3px] overflow-hidden',
                  )}
                />
                <p>
                Hello! My name is Fletcher Walmsley! - Welcome to my photo blog! <br/> <br/>
                This is a place where I add photos I think are cool. <br/>
                Some of the photos I upload are good, others I just like, and a bunch are film photos which I need to post somewhere to justify paying ~$1.4 a photo! <br/>
                The decent pics are usually taken on my Sony A6400 and can be found under the /shot-on/sony/ilce-6400 tag <br/>
                My film photos can be found under the /tag/film tag. Each of them is also tagged with the film stock used. E.g. /tag/fujifilm-200
                </p>
              </div>
            </div>
            </Container>
          <Container color={'blue'}>
          <div className="max-w-xl w-full">
            <div className="space-y-6">
              <p>
              About Me: <br/>
              I am a Software Developer who is currently based in Christchurch, New Zealand. <br/>
              I love getting outdoors and taking my camera with me. <br/> <br/>
              While I am a Software Engineer, my work is in embedded systems. So web development is not my wheelhouse <br/>
              As such, I will not claim to have created this website, but rather forked and modifed the excellent exif-photo-blog template, made by Sam Becker 
              </p>
            </div>
          </div>
        </Container>
        </div>}
    />
  );
}
