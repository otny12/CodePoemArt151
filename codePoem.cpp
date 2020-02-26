#include <iostream>
#define worldIsAlive 1

using namespace std;


class Ocean {
    private:
        bool isAlive;
        bool isNotAlive;
    public:
        Ocean() {
            isAlive = false;
            isNotAlive = true;
        }

        bool getisAlive() {
            return isAlive;
        }

        bool getisNotAlive() {
            return isNotAlive;
        }

        void setisAlive(bool val) {
            isAlive = val;
        }
        void setisNotAlive(bool val) {
            isNotAlive = val;
        }
};

class fish {
    private:
        bool alive;
        bool isSwimming;
        bool isVisible;
        string fishName; 

    public:
    // default constructor for fish class
        fish() {
            alive = true;
            isSwimming = true;
            isVisible = false;
        }

        void setisVisible(bool val) {
            isVisible = val;
        }

        void setAlive(bool val) {
            isVisible = val;
        }

        void setisSwimming(bool val) {
            isSwimming = val;
        }

        bool getalive() {
            return alive;
        }

        bool getIsSwimming() {
            return isSwimming;
        }

        bool getisVisible() {
            return isVisible;
        }
};

class ship {
    private:
        bool isFloating;
        bool isLarge;

    public:
    // default constructor for ship class
        ship() {
            isFloating = false;
            isLarge = false;
        }

};



class mantaRay : public fish {
    private:
        bool isLarge;
        bool isMajestic;
        bool isBeautiful;

    public:
    // default constructor for Manta ray class
        mantaRay() {
            setAlive(true);
            //alive = true;
            setisSwimming(true);
            //isSwimming = true;
            setisVisible(false);

            isLarge = false;
            isMajestic = false;
            isBeautiful = false;
        }
};

int main()
{
    mantaRay ray;

    while(worldIsAlive) {

    }

    return 0;
}