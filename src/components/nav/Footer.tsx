import Image from "next/image";
import React from "react";
import TMDBimg from "#/public/tmdb.svg";
import MALimg from "#/public/mal.png";
import Jikanimg from "#/public/jikan.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-6 px-10 border-t">
      <div>
        <p>© 2024 Better Reviews</p>
      </div>
      <div></div>
      <div>
        <h3 className="text-sm">Massive thanks to our API providers</h3>
        <div className="flex flex-col gap-y-2 pl-2 pt-2">
          <div className="flex gap-x-2">
            <Link href="https://myanimelist.net/">
              <Image
                src={MALimg}
                alt="MAL"
                className="rounded"
                width={30}
                height={30}
              />
            </Link>
            <Image
              src={Jikanimg}
              alt="Jikan"
              className="rounded"
              width={30}
              height={30}
            />
            <Image src={TMDBimg} alt="TMDB" width={30} height={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
