<?php declare(strict_types=1);

namespace Shopware\Core\Framework\Test\Api\Acl\fixtures;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @internal
 * @Route(defaults={"_routeScope"={"api"}})
 *
 * @package system-settings
 */
class AclTestController extends AbstractController
{
    /**
     * @Route("/api/testroute", name="api.test.route", methods={"GET"}, defaults={"auth_required"=true})
     */
    public function testRoute(Request $request): JsonResponse
    {
        return new JsonResponse([]);
    }
}
