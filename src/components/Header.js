import React from "react";

const Header = () => {
    return(
        <header className="bg-red-950 border-y-4 border-amber-400 text-lg font-cinzel py-2 text-center">
        <div className="container mx-auto">
          <h1 className="text-2xl underline text-slate-200 font-cinzel ">BRYANT LAW FIRM</h1>
        </div>

        <div className='flex flex-col items-center mx-5 font-cinzel text-xs text-white'>
            <p>(337)302-3192</p>
            <p>726 Lionel Lane</p>
            <p>Lake Charles, LA 70605</p>
        </div>

      </header>
    );
}

export default Header;